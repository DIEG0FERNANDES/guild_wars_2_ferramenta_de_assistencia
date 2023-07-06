import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import RaidStyles from '../styles/RaidsStyles';
import axios from 'axios';

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
      <View style={RaidStyles.container}>
        <Text style={RaidStyles.title}>Carregando Raids...</Text>
      </View>
    );
  }

  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={RaidStyles.container}>
      <ScrollView>
        {raids.map((raid, index) => (
          <View key={index} style={RaidStyles.raidContainer}>
            <Text style={RaidStyles.raidName}>{raid.id}</Text>
            <Text style={RaidStyles.raidDescription}>Wings: {raid.wings}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RaidsScreen;
