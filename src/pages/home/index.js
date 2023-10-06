// src/screens/home/index.js
import React from 'react';
import { ButtonContainer, ButtonText, Container } from './styles'; // Importa o Container da pasta styles.js

const HomeScreen = () => {
  return (
    <Container>
      <ButtonContainer>
        <ButtonText>Dungeons</ButtonText>
      </ButtonContainer>
      <ButtonContainer>
        <ButtonText>Meta Events</ButtonText>
      </ButtonContainer>
      <ButtonContainer>
        <ButtonText>Raids</ButtonText>
      </ButtonContainer>
      <ButtonContainer>
        <ButtonText>World Bosses</ButtonText>
      </ButtonContainer>
    </Container>
  );
};

export default HomeScreen;
