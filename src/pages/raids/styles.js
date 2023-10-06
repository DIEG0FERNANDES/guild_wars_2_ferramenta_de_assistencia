// src/pages/raids/styles.js
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #002727;
`

export const ScrollContainer = styled.ScrollView`
  width: 100%;
  padding-block: 20px;
`

export const Texto = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`

export const Raid = styled.View`
  width: 380px;
  margin-bottom: 15px;
  margin-top: 15px;
  background-color: #00E6E6;
  padding: 10px;
  border-radius: 10px;
`

export const Nome = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #06513E;
`

export const Localizacao = styled.Text`
  font-size: 14px;
  font-style: italic;
  margin-bottom: 5px;
  color: #06513E;
`

export const Descricao = styled.Text`
  font-size: 14px;
  color: #06513E;
`