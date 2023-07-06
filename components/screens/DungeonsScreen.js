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
      <View style={DungeonsStyles.container}>
        <Text style={DungeonsStyles.title}>Carregando Dungeons...</Text>
      </View>
    );
  }

  return (
    <View style={DungeonsStyles.container}>
      <ScrollView>
        {dungeons.map((dungeon, index) => (
          <View style={DungeonsStyles.dungeonContainer}>
            <View style={DungeonsStyles.buttonImage} />
            <View key={index}>
              <Text style={DungeonsStyles.dungeonName}>{dungeon.id}</Text>
              {dungeon.paths.map((path, pathIndex) => (
                <View key={pathIndex}>
                  <Text style={DungeonsStyles.dungeonDescription}>{pathIndex + 1}. {path.id}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DungeonsScreen;
