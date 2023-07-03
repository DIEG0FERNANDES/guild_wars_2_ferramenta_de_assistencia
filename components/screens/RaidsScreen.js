import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

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
    },
    // Adicione mais raids aqui
  ];

  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {raids.map((raid, index) => (
          <View key={index} style={styles.raidContainer}>
            <Text style={styles.raidName}>{raid.name}</Text>
            <Text style={styles.raidLocation}>{raid.location}</Text>
            <Text style={styles.raidDescription}>{raid.description}</Text>
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
  raidContainer: {
    width: 380,
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: '#00E6E6',
    padding: 10,
    borderRadius: 10,
  },
  raidName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#06513E',
  },
  raidLocation: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 5,
    color: '#06513E',
  },
  raidDescription: {
    fontSize: 14,
    color: '#06513E',
  },
});

export default RaidsScreen;
