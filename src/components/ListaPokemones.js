import React, { useContext } from "react";
import Pokemon from "./Pokemon";
import styled from "@emotion/styled";
import From from "./From";
import { PokemonContext } from "../context/pokemonContext";

import Error from "./Error";

const ContainerGeneralLista = styled.div`
  margin-top: 20px;
  width: 90%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ListaPokemones = () => {
  const { error } = useContext(PokemonContext);

  return (
    <>
      {error === true ? (
        <Error error={error} />
      ) : (
        <>
          <From />
          <ContainerGeneralLista>
            <Pokemon />
          </ContainerGeneralLista>
        </>
      )}
    </>
  );
};

export default ListaPokemones;
