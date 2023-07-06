import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import WorldBossesStyles from '../styles/WorldBossesStyles';

const WorldBossesScreen = () => {
  const [bosses, setBosses] = useState([]);
  const navigation = useNavigation();

  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    fetchWorldBosses();
  }, []);

  const fetchWorldBosses = async () => {
    try {
      const response = await axios.get('https://api.guildwars2.com/v2/worldbosses');
      const bossIds = response.data;
      fetchBossDetails(bossIds);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBossDetails = async (bossIds) => {
    try {
      const bossPromises = bossIds.map(async (bossId) => {
        const response = await axios.get(`https://api.guildwars2.com/v2/worldbosses/${bossId}`);
        return {
          id: capitalizeFirstLetter(response.data.id.replace(/_/g, ' ')),
          location: response.data.location,
        };
      });

      const bossData = await Promise.all(bossPromises);
      setBosses(bossData);
    } catch (error) {
      console.error(error);
    }
  };  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  if (bosses.length === 0) {
    return (
      <View style={WorldBossesStyles.container}>
        <Text style={WorldBossesStyles.title}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={WorldBossesStyles.container}>
      <ScrollView style={WorldBossesStyles.scrollView}>
        {bosses.map((boss, index) => (
          <View key={index} style={WorldBossesStyles.bossContainer}>
            <Text style={WorldBossesStyles.bossName}>{boss.id}</Text>
            <Text style={WorldBossesStyles.bossLocation}>{boss.location}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default WorldBossesScreen;
