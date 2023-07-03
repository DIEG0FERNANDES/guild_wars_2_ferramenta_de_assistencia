import * as React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


const WorldBossesScreen = () => {
  const [bosses, setBosses] = useState([]);

  const navigation = useNavigation();

  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    fetch('https://api.guildwars2.com/v1/world_names', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        setBosses(data);
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
        {bosses.map(boss => (
          <View key={boss.id} style={styles.bossContainer}>
            <Text style={styles.bossName}>{boss.name} </Text>
            <Text style={styles.bossLocation}>Localizacao:{boss.location} </Text>
            <Text>Tempo de Respawn: {boss.spawn_interval} segundos</Text>
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