// src/screens/home/index.js
import React from 'react';
import { ButtonContainer, ButtonText, Container } from './styles'; // Importa o Container da pasta styles.js

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <ButtonContainer
        onPress={() => navigation.navigate('Dungeons')} // Atualizado para 'Dungeons'
      >
        <ButtonText>Navegar para Dungeons</ButtonText> // Atualizado para 'Dungeons'
      </ButtonContainer>
      <ButtonContainer
        onPress={() => navigation.navigate('MetaEvents')} // Adicione essa parte para navegar para MetaEventsScreen
      >
        <ButtonText>Navegar para Meta Events</ButtonText>
      </ButtonContainer>
    </Container>
  );
};

export default HomeScreen;
