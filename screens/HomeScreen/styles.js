import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import styled from "styled-components/native";

export const Body = styled.View`
  flex: 1;
  background-color: #002727;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.View`
  flex: 1;
  padding: 10px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Botao = styled.TouchableOpacity`
  background-color: #00e6e6;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 19px;
  border-radius: 8px;
`;
export const BoxImg = styled.View`
  background-color: blue;
  height: 135px;
  width: 135px;
  margin: 5px;
  border-radius: 6px;
`;
export const BoxTitulo = styled.Text`
  font-size: 20px;
  margin: 5px;
`;


export const ArrowRight  = styled(FontAwesomeIcon)`
  margin: 5px;
`