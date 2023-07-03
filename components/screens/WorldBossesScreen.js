import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
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
        const bossArray = data.map(bossId => ({ id: bossId }));
        setBosses(bossArray);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const fetchBossLocation = (bossId) => {
    fetch(`https://api.guildwars2.com/v2/worldbosses/${bossId}`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => {
        const continentId = data.map_id;
        fetch(`https://api.guildwars2.com/v2/continents?ids=${continentId}`, {
          method: 'GET'
        })
          .then((response) => response.json())
          .then((continentData) => {
            const continent = continentData[continentId];
            if (continent) {
              const continentName = continent.name;
              fetch(`https://api.guildwars2.com/v2/maps?ids=${continent.maps}`, {
                method: 'GET'
              })
                .then((response) => response.json())
                .then((mapData) => {
                  const map = mapData.find((map) => map.id === data.map_id);
                  if (map) {
                    const mapName = map.name;
                    const updatedBosses = bosses.map((boss) => {
                      if (boss.id === bossId) {
                        return { ...boss, location: `${mapName} (${continentName})` };
                      }
                      return boss;
                    });
                    setBosses(updatedBosses);
                  }
                })
                .catch((error) => {
                  console.error(error);
                });
            }
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };


  if (bosses.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {bosses.map((boss, index) => (
          <View key={index} style={styles.bossContainer}>
            <Text style={styles.bossName}>{boss.id}</Text>
            <Text style={styles.bossLocation}>[{boss.location}]</Text>
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
    width: 380,
    marginBottom: 8,
    marginTop: 10,
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
