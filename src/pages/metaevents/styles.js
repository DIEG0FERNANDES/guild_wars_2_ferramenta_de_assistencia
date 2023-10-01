// src/pages/metaevents/styles.js
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #002727;
`;

export const EventContainer = styled.View`
  margin-bottom: 10px;
  background-color: #00E6E6;
  padding: 10px;
  border-radius: 10px;
`;

export const EventName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #06513E;
`;

export const EventLocation = styled.Text`
  font-size: 14px;
  font-style: italic;
  margin-bottom: 5px;
  color: #06513E;
`;

export const EventDescription = styled.Text`
  font-size: 14px;
  color: #06513E;
`;
