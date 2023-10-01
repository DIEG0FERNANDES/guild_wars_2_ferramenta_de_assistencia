import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Importa createNativeStackNavigator

import HomeScreen from './src/pages/home'; // Importa HomeScreen da pasta home
import DungeonsScreen from './src/pages/dungeon';
import MetaEventsScreen from './src/pages/metaevents'; // Importa DungeonsScreen da pasta dungeon

export default function App() {
  const Stack = createNativeStackNavigator(); // Mova a criação do Stack para dentro da função

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: styles.header,
          headerTitleAlign: 'center',
          headerTitleStyle: styles.headerTitle,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Página Inicial' }}
        />
        <Stack.Screen
          name="Dungeons"
          component={DungeonsScreen}
          options={{ title: 'Dungeons' }}
        />
        <Stack.Screen
          name="MetaEvents"
          component={MetaEventsScreen}
          options={{ title: 'Meta Events' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00E6E6',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#06513E',
  },
});