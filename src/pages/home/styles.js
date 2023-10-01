// src/pages/home/styles.js
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #002727;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 300px;
  margin-bottom: 20px;
  background-color: #00E6E6;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #06513E;
  text-align: center;
`;
