import { MetaEventsStylesheet, Text, View, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import MetaEventsStyles from '../styles/MetaEventsStyles';

const MetaEventsScreen = ({ navigation }) => {
  const [events, setEvents] = useState([]);

  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  // useEffect(() => {
  //   fetch('https://api.guildwars2.com/v2/events')
  //     .then(response => response.json())
  //     .then(data => {
  //       setEvents(data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  // if (events.length === 0) {
  //   return (
  //     <View style={MetaEventsStyles.container}>
  //       <Text style={MetaEventsStyles.title}>Carregando...</Text>
  //     </View>
  //   );
  // }

  const metaEvents = [
    {
      name: 'Day and Night - Tyria',
      time: '06:30 - 23:00',
      locations: ['Day', 'Dusk', 'Night', 'Dawn'],
      level: 80,
    },
    {
      name: 'Day Top - Tyria',
      time: '09:00 - 15:00',
      locations: ['Sandstorm', 'Crash Site'],
      level: 75,
    },
    {
      name: 'Ley-Line Anomaly - Tyria',
      time: '16:00 - 21:00',
      locations: ['Iron Marches', 'Gendarran Fields', 'Timberline Falls'],
      level: 85,
    },
    {
      name: 'Verdant Brink - Heart of Thorns',
      time: '12:00 - 19:00',
      locations: ['Daytime', 'Night', 'Night Bosses'],
      level: 80,
    },
    {
      name: 'Auric Basin - Heart of Thorns',
      time: '18:00 - 22:30',
      locations: ['Octovine', 'Reset', 'Pylons', 'Challenges'],
      level: 75,
    },
    {
      name: 'Tangled Depths - Heart of Thorns',
      time: '12:30 - 14:00',
      locations: ['Help the Outpost', 'Prep', 'Chak Gerent'],
      level: 50,
    },
    {
      name: 'Dragon\'s Stand - Heart of Thorns',
      time: '10:30 - 13:00',
      locations: ['Start'],
      level: 60,
    },
    {
      name: 'Lake Doric - Heart of Thorns',
      time: '10:40 - 14:00',
      locations: ['Saidra\'s Haven', 'New Loamhurst', 'Noran\'s Homestead'],
      level: 85,
    }
  ];

  return (
    <View style={MetaEventsStyles.container}>
      <ScrollView style={MetaEventsStyles.scrollView}>
        {metaEvents.map((event, index) => (
          <View key={index} style={MetaEventsStyles.eventContainer}>
            <Text style={MetaEventsStyles.eventName}>{event.name}</Text>
            <Text style={MetaEventsStyles.eventLocation}>{event.locations}}</Text>
            <Text>{event.time}</Text>
            <Text style={MetaEventsStyles.eventDescription}>Level: {event.level}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MetaEventsScreen;
