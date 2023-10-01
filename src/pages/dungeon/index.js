// src/screens/dungeon/index.js
import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Container, DungeonContainer, DungeonName, ButtonImage, DungeonDescription } from './styles'; // Importa os componentes e estilos da pasta styles.js
import axios from 'axios';

const DungeonsScreen = ({ navigation }) => {
  const [dungeons, setDungeons] = useState([]);

  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    fetchDungeons();
  }, []);

  const fetchDungeons = async () => {
    try {
      const response = await axios.get('https://api.guildwars2.com/v2/dungeons');
      const dungeonIds = response.data;
      fetchDungeonDetails(dungeonIds);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDungeonDetails = async (dungeonIds) => {
    try {
      const dungeonPromises = dungeonIds.map(async (dungeonId) => {
        const response = await axios.get(`https://api.guildwars2.com/v2/dungeons/${dungeonId}`);
        const paths = response.data.paths.map((path) => ({
          id: capitalizeFirstLetter(removeDungeonName(path.id.replace(/_/g, ' '))),
          type: path.type,
        }));
        return {
          id: capitalizeFirstLetter(response.data.id.replace(/_/g, ' ')),
          paths: paths,
        };
      });

      const dungeonsData = await Promise.all(dungeonPromises);
      setDungeons(dungeonsData);
    } catch (error) {
      console.error(error);
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const removeDungeonName = (string) => {
    const lastIndex = string.lastIndexOf(' ');
    if (lastIndex !== -1) {
      return string.substring(lastIndex + 1);
    }
    return string;
  };

  if (dungeons.length === 0) {
    return (
      <Container>
        <Text>Loading Dungeons...</Text>
      </Container>
    );
  }

  return (
    <Container>
      <ScrollView>
        {dungeons.map((dungeon, index) => (
          <DungeonContainer key={index}>
            <ButtonImage />
            <View>
              <DungeonName>{dungeon.id}</DungeonName>
              {dungeon.paths.map((path, pathIndex) => (
                <DungeonDescription key={pathIndex}>
                  {pathIndex + 1}. {path.id}
                </DungeonDescription>
              ))}
            </View>
          </DungeonContainer>
        ))}
      </ScrollView>
    </Container>
  );
};

export default DungeonsScreen;
