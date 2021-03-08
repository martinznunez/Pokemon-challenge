import React, { Fragment, useContext } from "react";

import styled from "@emotion/styled";
import { PokemonContext } from "../context/pokemonContext";
import { useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const ContainerFrom = styled.form`
  margin: 10px;

  input {
    width: 200px;
    margin: 10px;
    padding: 20px;
    border-radius: 5px;
    background-color: #def;
    outline: none;
    background-color: #dfe;
    border: 0;
  }
  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    font-size: 1rem;
    color: var(--colorShadeA);
    font-weight: 700;
    text-transform: uppercase;
    font-family: inherit;
    padding: 1em 2em;
    border-radius: 1em;
    background: var(--colorShadeE);
    :focus {
      background-color: violet;
    }
  }
`;

const From = () => {
  const [mensajeErrorBusqueda, setMensajeErrorBusqueda] = useState(false);
  const history = useHistory();
  const { setInputValue, poke, inputValue } = useContext(PokemonContext);

  const HashChange = (e) => {
    setInputValue(e.target.value);
  };

  const HashClick = (e) => {
    console.log(inputValue);
    e.preventDefault();
    const obtenerPokeVaulue = poke.filter(
      (item) => item.data.name === inputValue.toLowerCase()
    );

    if (!obtenerPokeVaulue[0]) {
      return setMensajeErrorBusqueda(true);
    }

    if (obtenerPokeVaulue) {
      const selecInput = obtenerPokeVaulue[0].data.id;
      history.push(`/pokemon/:${selecInput}`);
      setInputValue("");
    }
  };

  return (
    <Fragment>
      <ContainerFrom>
        <input onChange={HashChange} type="text" placeholder="Buscar pokemón" />
        <button onClick={HashClick}>Buscar</button>
        <br></br>
        {mensajeErrorBusqueda === true
          ? "No hay resultados para la busqueda"
          : null}
      </ContainerFrom>
    </Fragment>
  );
};

export default From;
