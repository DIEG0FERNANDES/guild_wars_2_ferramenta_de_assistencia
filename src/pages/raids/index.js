import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import { Container, Localizacao, Nome, Raid, Texto } from './styles';

const RaidsScreen = ({ navigation }) => {
  const [raids, setRaids] = useState([]);

  useEffect(() => {
    fetchRaids();
  }, []);

  const fetchRaids = async () => {
    try {
      const response = await axios.get('https://api.guildwars2.com/v2/raids');
      const raidIds = response.data;
      fetchRaidDetails(raidIds);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRaidDetails = async (raidIds) => {
    try {
      const raidPromises = raidIds.map(async (raidId) => {
        const response = await axios.get(`https://api.guildwars2.com/v2/raids/${raidId}`);
        return {
          id: capitalizeFirstLetter(response.data.id.replace(/_/g, ' ')),
          wings: response.data.type
        };
      });

      const raidData = await Promise.all(raidPromises);
      setRaids(raidData);
    } catch (error) {
      console.error(error);
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  if (raids.length === 0) {
    return (
      <Container>
        <Texto>Carregando Raids...</Texto>
      </Container>
    );
  }

  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <ScrollView>
        {raids.map((raid, index) => (
          <Raid key={index}>
            <Nome>{raid.id}</Nome>
            <Localizacao>Teste</Localizacao>
            <Descricao >Wings: {raid.wings}</Descricao>
          </Raid>
        ))}
      </ScrollView>
    </Container>
  );
};

export default RaidsScreen;
