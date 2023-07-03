import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import DungeonsStyles from '../styles/DungeonsStyle';

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
    }
  ];

  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={DungeonsStyles.container}>
      <ScrollView>
        {dungeons.map((dungeon, index) => (
          <View key={index} style={DungeonsStyles.dungeonContainer}>
            <Text style={DungeonsStyles.dungeonName}>{dungeon.name}</Text>
            <Text style={DungeonsStyles.dungeonLocation}>{dungeon.location}</Text>
            <Text style={DungeonsStyles.dungeonDescription}>{dungeon.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DungeonsScreen;
