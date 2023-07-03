import { MetaEventsStylesheet, Text, View, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import MetaEventsStyles from '../styles/MetaEventsStyles';

const MetaEventsScreen = ({ navigation }) => {
  const metaEvents = [

    // Adicione mais eventos meta aqui
  ];
  const [events, setEvents] = useState([]);

  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    fetch('https://api.guildwars2.com/v2/events', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  

  if (events.length === 0) {
    return (
      <View style={MetaEventsStyles.container}>
        <Text style={MetaEventsStyles.title}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={MetaEventsStyles.container}>
      <ScrollView style={MetaEventsStyles.scrollView}>
        {metaEvents.map((event, index) => (
          <View key={index} style={MetaEventsStyles.eventContainer}>
            <Text style={MetaEventsStyles.eventName}>asdas{event.name}</Text>
            <Text style={MetaEventsStyles.eventLocation}>asdasd{event.location}</Text>
            <Text>asdasd{event.state}</Text>
            <Text style={MetaEventsStyles.eventDescription}>asdasd{event.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MetaEventsScreen;
