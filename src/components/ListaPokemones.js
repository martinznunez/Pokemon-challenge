import React from "react";
import Pokemon from "./Pokemon";
import styled from "@emotion/styled";
import From from "./From";

const ContainerGeneralLista = styled.div`
  margin-top: 20px;
  width: 90%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ListaPokemones = () => {
  return (
    <>
      <From />
      <ContainerGeneralLista>
        <Pokemon />
      </ContainerGeneralLista>
    </>
  );
};

export default ListaPokemones;
