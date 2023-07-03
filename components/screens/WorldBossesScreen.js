import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const WorldBossesScreen = () => {
  const [bosses, setBosses] = useState([]);

  const navigation = useNavigation();

  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    fetch('https://api.guildwars2.com/v2/worldbosses', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => {
        const bossArray = data.map(bossId => ({ name: bossId }));
        setBosses(bossArray);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (bosses.length === 0) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {bosses.map((boss, index) => (
          <View key={index} style={styles.bossContainer}>
            <Text style={styles.bossName}>{boss.name}</Text>
            <Text style={styles.bossLocation}>localização</Text>
            <Text>Tempo de Respawn:</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#002727',
  },
  scrollView: {
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  bossContainer: {
    marginBottom: 10,
    backgroundColor: '#00E6E6',
    padding: 10,
    borderRadius: 10,
  },
  bossName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#06513E',
  },
  bossLocation: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default WorldBossesScreen;
