import React, { Fragment, useContext } from "react";

import Error from "./Error";
import styled from "@emotion/styled";
import { PokemonContext } from "../context/pokemonContext";
import { useHistory } from "react-router-dom";

const ContainerFrom = styled.form`
  margin: 10px;
  input {
    margin: 10px;
    padding: 15px;
  }
  button {
    padding: 10px;
    background: #1e5e9e;
    cursor: pointer;
  }
`;

const From = () => {
  const history = useHistory();
  const { setInputValue, poke, inputValue, setError, error } = useContext(
    PokemonContext
  );

  const HashChange = (e) => {
    setInputValue(e.target.value);
  };

  const HashClick = (e) => {
    e.preventDefault();
    const obtenerPokeVaulue = poke.filter(
      (item) => item.data.name === inputValue.toLowerCase()
    );

    if (!obtenerPokeVaulue[0]) {
      return setError(true);
    }

    if (obtenerPokeVaulue) {
      setError(false);
      const selecInput = obtenerPokeVaulue[0].data.id;
      history.push(`/pokemon/:${selecInput}`);
    }
  };

  return (
    <Fragment>
      <ContainerFrom>
        <input onChange={HashChange} type="text" placeholder="Buscar pokemón" />
        <button onClick={HashClick}>Buscar</button>
        {error === true ? <Error /> : null}
      </ContainerFrom>
    </Fragment>
  );
};

export default From;
