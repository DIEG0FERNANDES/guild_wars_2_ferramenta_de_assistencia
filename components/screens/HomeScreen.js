import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="World Bosses"
          onPress={() => navigation.navigate('World Bosses')}
          style={styles.button}
          color="#00E6E6"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Meta Events"
          onPress={() => navigation.navigate('Meta Events')}
          style={styles.button}
          color="#00E6E6"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Raids"
          onPress={() => navigation.navigate('Raids')}
          style={styles.button}
          color="#00E6E6"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Dungeons"
          onPress={() => navigation.navigate('Dungeons')}
          style={styles.button}
          color="#00E6E6"
        />
      </View>
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
  buttonContainer: {
    padding: 10,
    width: 320,
  },
  button: {
    width: 200,
    padding: 100,
    borderRadius: 15,
  },
});

export default HomeScreen;
