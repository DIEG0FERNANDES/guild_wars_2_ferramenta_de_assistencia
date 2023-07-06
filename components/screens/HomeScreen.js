import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import HomeScreenStyles from '../styles/HomeScreenStyle';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={HomeScreenStyles.container}>
      <TouchableOpacity
        style={HomeScreenStyles.buttonContainer}
        onPress={() => navigation.navigate('World Bosses')}
      >
        <View style={HomeScreenStyles.buttonImage} />
        <Text style={HomeScreenStyles.buttonText}>World Bosses</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={HomeScreenStyles.buttonContainer}
        onPress={() => navigation.navigate('Meta Events')}
      >
        <View style={HomeScreenStyles.buttonImage} />
        <Text style={HomeScreenStyles.buttonText}>Meta Events</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={HomeScreenStyles.buttonContainer}
        onPress={() => navigation.navigate('Raids')}
      >
        <View style={HomeScreenStyles.buttonImage} />
        <Text style={HomeScreenStyles.buttonText}>Raids</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={HomeScreenStyles.buttonContainer}
        onPress={() => navigation.navigate('Dungeons')}
      >
        <View style={HomeScreenStyles.buttonImage} />
        <Text style={HomeScreenStyles.buttonText}>Dungeons</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
