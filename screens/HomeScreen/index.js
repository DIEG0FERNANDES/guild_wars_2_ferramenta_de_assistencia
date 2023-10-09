import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Header from "../../components/Header";
import { Body, BoxImg, BoxTitulo, Container, Botao } from "./styles";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HomeScreen = () => {
  return (
    <Body>
      <Header />
      <Container>
        <Botao>
            <BoxImg/>
            <BoxTitulo>Bosses Mundiais</BoxTitulo>
            <FontAwesomeIcon icon={faArrowRight}/>
        </Botao>
        <Botao>
            <BoxImg/>
            <BoxTitulo>Eventos Meta</BoxTitulo>
            <FontAwesomeIcon icon={faArrowRight}/>
        </Botao>
        <Botao>
            <BoxImg/>
            <BoxTitulo>Raids</BoxTitulo>
            <FontAwesomeIcon icon={faArrowRight}/>
        </Botao>
        <Botao>
            <BoxImg/>
            <BoxTitulo>Dungeons</BoxTitulo>
            <FontAwesomeIcon icon={faArrowRight}/>
        </Botao>
      </Container>
    </Body>
  );
};
export default HomeScreen;
