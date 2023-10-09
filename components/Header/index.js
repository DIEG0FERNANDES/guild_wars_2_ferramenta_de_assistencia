import { StatusBar } from "expo-status-bar";
import { Cabeca, NomePagina, SubNomePagina } from "./styles";

const Header = () => {
  return (
    <>
      <Cabeca>
        <NomePagina>GUILD WARS 2</NomePagina>
        <SubNomePagina>ferramenta de assistência</SubNomePagina>
      </Cabeca>
    </>
  );
};
export default Header;
