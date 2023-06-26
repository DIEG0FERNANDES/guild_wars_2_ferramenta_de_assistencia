
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/screens/HomeScreen';

import RaidsScreen from './components/screens/RaidsScreen';
import DungeonsScreen from './components/screens/DungeonsScreen';
import MetaEventsScreen from './components/screens/MetaEventsScreen';
import WorldBossesScreen from './components/screens/WorldBossesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="World Bosses" component={WorldBossesScreen} />
        <Stack.Screen name="Meta Events" component={MetaEventsScreen} />
        <Stack.Screen name="Raids" component={RaidsScreen} />
        <Stack.Screen name="Dungeons" component={DungeonsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
