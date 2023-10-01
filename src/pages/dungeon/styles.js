// src/pages/dungeon/styles.js
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #002727;
`;

export const DungeonContainer = styled.View`
  width: 380px;
  margin-bottom: 15px;
  margin-top: 15px;
  background-color: #00E6E6;
  padding: 10px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const DungeonName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #06513E;
`;

export const ButtonImage = styled.View`
  width: 70px;
  height: 130px;
  background-color: #06513E;
  margin-right: 10px;
`;

export const DungeonDescription = styled.Text`
  font-size: 14px;
  color: #06513E;
`;

export const LoadingText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #06513E;
`;