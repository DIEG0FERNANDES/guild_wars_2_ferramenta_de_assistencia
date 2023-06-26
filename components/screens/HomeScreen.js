import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
       <Button
        title="Go to World Bosses"
        onPress={() => navigation.navigate('World Bosses')}
      />
       <Button
        title="Go to Meta Events"
        onPress={() => navigation.navigate('Meta Events')}
      />
      <Button
        title="Go to Raids"
        onPress={() => navigation.navigate('Raids')}
      />
      <Button
        title="Go to Dungeons"
        onPress={() => navigation.navigate('Dungeons')}
      />
     
     
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
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
