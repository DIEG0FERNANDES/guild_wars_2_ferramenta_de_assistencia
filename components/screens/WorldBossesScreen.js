import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

const WorldBossesScreen = () => {
  const [bosses, setBosses] = useState([]);

  useEffect(() => {
    fetch('https://api.guildwars2.com/v2/worldbosses')
      .then(response => response.json())
      .then(data => {
        setBosses(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (bosses.length === 0) {
    return <Text>Carregando...</Text>;
  }

  const goToHomeScreen = () => {
    // Define your navigation logic to go back to the Home screen here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>World Bosses Screen</Text>
      {bosses.map((boss) => (
        <View key={boss.id} style={styles.bossContainer}>
          <Text style={styles.bossName}>Nome do World Boss: {boss.name}</Text>
          <Text style={styles.bossLocation}>{boss.location}</Text>
          <Text>Nível Mínimo: {boss.level}</Text>
          <Text>Tempo de Respawn: {boss.spawn_interval} segundos</Text>
        </View>
      ))}
      <Button title="Back to Home" onPress={goToHomeScreen} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  bossContainer: {
    marginBottom: 10,
  },
  bossName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bossLocation: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default WorldBossesScreen;