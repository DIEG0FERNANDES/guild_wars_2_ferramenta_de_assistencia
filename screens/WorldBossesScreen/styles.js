import styled from "styled-components/native";

export const Body = styled.View`
  flex: 1;
  background-color: #002727;
`;
export const Container = styled.ScrollView`
  flex: 1;
  padding: 5px;
`;
export const Card = styled.TouchableOpacity`
  margin: 10px;
  padding: 5px;
  background-color: #00e6e6;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const CardImg = styled.View`
    background-color: blue;
    height: 80px;
    width: 80px;
    border-radius: 6px;
`
export const Description = styled.View`
flex-direction: column;
`
export const Texto = styled.Text`
  color: white;
  margin-left: 5px;
  margin-right: 5px;
`;
