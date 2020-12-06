import React, { useContext } from "react";

import { PokemonContext } from "../context/pokemonContext";
import styled from "@emotion/styled";

const MensajeError = styled.p`
  font-size: 2rem;
  margin-top: 20px;
  background-color: red;
  padding: 5px;
  color: #fff;
`;

const Error = () => {
  const { error } = useContext(PokemonContext);

  return (
    <MensajeError>
      {" "}
      {error ? "Algo a fallado, intentelo de nuevo..." : null}{" "}
    </MensajeError>
  );
};

export default Error;
