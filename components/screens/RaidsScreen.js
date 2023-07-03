import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import RaidStyles from '../styles/RaidsStyles';

const RaidsScreen = ({ navigation }) => {
  const raids = [
    {
      name: 'Spirit Vale',
      location: 'Forsaken Thicket',
      description: 'Venture into the Spirit Woods and face the first raid boss, Vale Guardian.',
    },
    {
      name: 'Salvation Pass',
      location: 'Forsaken Thicket',
      description: 'Continue deeper into Forsaken Thicket and challenge the trio of raid bosses.',
    },
    {
      name: 'Stronghold of the Faithful',
      location: 'Forsaken Thicket',
      description: 'Confront the raid bosses at the Stronghold of the Faithful.',
    },
    {
      name: 'Bastion of the Penitent',
      location: 'Lake Doric',
      description: 'Explore the haunted prison and take on the raid bosses lurking within.',
    },
    {
      name: 'Hall of Chains',
      location: 'Domain of Torment',
      description: 'Enter the Domain of Torment and face the raid bosses in the Hall of Chains.',
    }
  ];

  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={RaidStyles.container}>
      <ScrollView>
        {raids.map((raid, index) => (
          <View key={index} style={RaidStyles.raidContainer}>
            <Text style={RaidStyles.raidName}>{raid.name}</Text>
            <Text style={RaidStyles.raidLocation}>{raid.location}</Text>
            <Text style={RaidStyles.raidDescription}>{raid.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RaidsScreen;
