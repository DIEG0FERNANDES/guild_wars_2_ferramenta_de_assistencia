import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import DungeonsStyles from '../styles/DungeonsStyle';
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
          id: path.id,
          type: path.type,
        }));
        return {
          id: response.data.id,
          paths: paths,
        };
      });

      const dungeonsData = await Promise.all(dungeonPromises);
      setDungeons(dungeonsData);
    } catch (error) {
      console.error(error);
    }
  };

  if (dungeons.length === 0) {
    return (
      <View style={DungeonsStyles.container}>
        <Text style={DungeonsStyles.title}>Carregando Dungeons...</Text>
      </View>
    );
  }

  return (
    <View style={DungeonsStyles.container}>
      <ScrollView>
        {dungeons.map((dungeon, index) => (
          <View key={index} style={DungeonsStyles.dungeonContainer}>
            <Text style={DungeonsStyles.dungeonName}>{dungeon.id}</Text>
            {dungeon.paths.map((path, pathIndex) => (
              <View key={pathIndex}>
                <Text style={DungeonsStyles.dungeonDescription}>. {path.id}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DungeonsScreen;
