import Header from "../../components/Header";
import { Body, BoxImg, BoxTitulo, Container, Botao, ArrowRight } from "./styles";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HomeScreen = () => {
  return (
    <Body>
      <Header />
      <Container>
        <Botao>
            <BoxImg/>
            <BoxTitulo>Bosses Mundiais</BoxTitulo>
            <ArrowRight icon={faArrowRight}/>
        </Botao>
        <Botao>
            <BoxImg/>
            <BoxTitulo>Eventos Meta</BoxTitulo>
            <ArrowRight icon={faArrowRight}/>
        </Botao>
        <Botao>
            <BoxImg/>
            <BoxTitulo>Raids</BoxTitulo>
            <ArrowRight icon={faArrowRight}/>
        </Botao>
        <Botao>
            <BoxImg/>
            <BoxTitulo>Dungeons</BoxTitulo>
            <ArrowRight icon={faArrowRight}/>
        </Botao>
      </Container>
    </Body>
  );
};
export default HomeScreen;
