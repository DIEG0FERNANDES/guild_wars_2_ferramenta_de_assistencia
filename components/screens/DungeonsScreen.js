import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

const DungeonsScreen = ({ navigation }) => {
  const dungeons = [
    {
      name: 'Ascalonian Catacombs',
      location: 'Plains of Ashford',
      description: 'Explore the haunted catacombs and defeat the corrupted foes within.',
    },
    {
      name: 'Caudecus\'s Manor',
      location: 'Queensdale',
      description: 'Infiltrate the manor and face off against Caudecus Beetlestone and his minions.',
    },
    {
      name: 'Twilight Arbor',
      location: 'Caledon Forest',
      description: 'Venture into the heart of Caledon Forest and confront the Nightmare Court.',
    },
    {
      name: 'Sorrow\'s Embrace',
      location: 'Dredgehaunt Cliffs',
      description: 'Descend into the underground city and battle the Dredge and their machinations.',
    },
    {
      name: 'Citadel of Flame',
      location: 'Fireheart Rise',
      description: 'Journey to Fireheart Rise and challenge the Flame Legion within their citadel.',
    },
    // Adicione mais dungeons aqui
  ];

  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {dungeons.map((dungeon, index) => (
          <View key={index} style={styles.dungeonContainer}>
            <Text style={styles.dungeonName}>{dungeon.name}</Text>
            <Text style={styles.dungeonLocation}>{dungeon.location}</Text>
            <Text style={styles.dungeonDescription}>{dungeon.description}</Text>
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
  },
  dungeonContainer: {
    width: 380,
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: '#00E6E6',
    padding: 10,
    borderRadius: 10,
  },
  dungeonName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#06513E',
  },
  dungeonLocation: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 5,
    color: '#06513E',
  },
  dungeonDescription: {
    fontSize: 14,
    color: '#06513E',
  },
});

export default DungeonsScreen;
