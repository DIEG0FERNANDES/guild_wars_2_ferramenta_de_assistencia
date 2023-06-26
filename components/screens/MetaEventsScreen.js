import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useState, useEffect } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MetaEventsScreen = ({ navigation }) => {
  const metaEvents = [
    {
      /**
    {
      name: 'Dragonfall',
      location: 'Crystal Desert',
      description:
        'Battle against Kralkatorrik and its minions in the Crystal Desert.',
    },
    {
      name: 'Verdant Brink',
      location: 'Heart of Maguuma',
      description:
        'Engage in nighttime assault and daytime recovery events in the dense jungle.',
    },
    {
      name: 'Auric Basin',
      location: 'Heart of Maguuma',
      description:
        'Work with the local Exalted and Itzel to defend the Golden City of Tarir.',
    },
    {
      name: 'Tangled Depths',
      location: 'Heart of Maguuma',
      description:
        'Explore the underground labyrinth and aid the Nuhoch and Chak in their struggles.',
    },
    {
      name: "Dragon's Stand",
      location: 'Heart of Maguuma',
      description:
        'Join the Pact in an all-out assault on the jungle dragon Mordremoth.',
    },
     */
    },

    // Adicione mais eventos meta aqui
  ];
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://api.guildwars2.com/v2/events')
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (events.length === 0) {
    return <Text>Carregando...</Text>;
  }

  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meta Events Screen</Text>
      <ScrollView style={styles.scrollView}>
        {metaEvents.map((event, index) => (
          <View key={index} style={styles.eventContainer}>
            <Text style={styles.eventName}>{event.name}</Text>
            <Text>{event.state}</Text>
            <Text style={styles.eventLocation}>{event.location}</Text>
            <Text style={styles.eventDescription}>{event.description}</Text>
          </View>
        ))}
      </ScrollView>
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
  },
  eventContainer: {
    marginBottom: 20,
    backgroundColor: '#00E6E6',
    padding: 10,
    borderRadius: 5,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#06513E',
  },
  eventLocation: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 5,
    color: '#06513E',
  },
  eventDescription: {
    fontSize: 14,
    color: '#06513E',
  },
});

export default MetaEventsScreen;
