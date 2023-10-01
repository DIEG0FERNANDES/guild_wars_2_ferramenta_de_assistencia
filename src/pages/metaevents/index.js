// src/pages/metaevents/index.js
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Container, EventContainer, EventName, EventLocation, EventDescription } from './styles';
import axios from 'axios';

const MetaEventsScreen = ({ navigation }) => {
  const [events, setEvents] = useState([]);

  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('https://api.guildwars2.com/v2/events');
      const eventsIds = response.data;
      fetchEventsDetails(eventsIds);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchEventsDetails = async () => {
      
  }
  if (events.length === 0) {
    return (
      <Container>
        <EventDescription>Loading Events...</EventDescription>
      </Container>
    );
  }

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
    <Container>
      <ScrollView>
        {metaEvents.map((event, index) => (
          <EventContainer key={index}>
            <EventName>{event.name}</EventName>
            <EventLocation>{event.locations}</EventLocation>
            <EventDescription>Time: {event.time}</EventDescription>
            <EventDescription>Level: {event.level}</EventDescription>
          </EventContainer>
        ))}
      </ScrollView>
    </Container>
  );
};

export default MetaEventsScreen;
