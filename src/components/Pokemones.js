import React, { useContext, useEffect } from "react";
import { PokemonContext } from "../context/pokemonContext";
import { useParams } from "react-router-dom";

import Error from "./Error";

import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

const ContainerGeneral = styled.div`
  width: 90%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const ContainerPokemon = styled.div`
  display: flex;
  background: linear-gradient(225deg, #e8f7f7, #c3d0d0);
  box-shadow: -7px 7px 22px #bbc7c7, 7px -7px 22px #f7ffff;
  text-align: center;
  align-items: center;
  border: solid rgba(26, 196, 187, 0.95);
  width: 100%;
  border-radius: 30px;
  justify-content: center;
  @media screen and (min-width: 800px) {
    width: 80%;
    margin: auto;
  }
`;

const ContainerTajeta = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ContainerTituloImg = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  h1 {
    font-size: 1.3rem;
  }
  @media screen and (min-width: 800px) {
    justify-content: center;
    h1 {
      font-size: 1.8rem;
    }
  }
`;

const ContainerImg = styled.div`
  img {
    width: 150px;
    height: 150px;
  }
  @media screen and (min-width: 800px) {
    img {
      width: 190px;
      height: 200px;
    }
  }
`;

const ContainerInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ContainerMedidas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.3rem;

    color: #4f4f4f;
  }
  span {
    font-size: 1rem;
    color: #000;
  }
  @media screen and (min-width: 800px) {
    flex-direction: row;
    margin: 10px;
    p {
      margin: 30px;
    }
  }
  @media screen and (min-width: 1200px) {
    span {
      font-size: 1.4rem;
      padding-top: 10px;
      color: #000;
    }
    p {
      margin-top: 10px;
      font-size: 1.8rem;
    }
  }
`;

const ContainerAnteriorSiguente = styled.div`
  button {
    color: #08233e;

    font: 2.4em Futura, ‘Century Gothic’, AppleGothic, sans-serif;
    font-size: 70%;
    padding: 14px;
    background-color: rgba(255, 204, 0, 1);
    border: 1px solid #ffcc00;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    border-bottom: 1px solid #9f9f9f;
    -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
    cursor: pointer;
    margin: 10px;
  }
  && :hover {
    background-color: rgba(255, 204, 0, 0.4);
  }
`;

const Btn = styled.button`
  background-color: red;
  color: white;
  padding: 1em 1.5em;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  width: 50%;
  margin: auto;
  margin-top: 20px;

  &&:hover {
    background-color: #555;
  }
  &&:active {
    background-color: black;
  }
  &&:visited {
    background-color: black;
  }
`;

const Pokemones = () => {
  const { id } = useParams();

  const history = useHistory();

  const HashClick = () => {
    history.push("/");
  };

  const { poke, setFilter, filter, error } = useContext(PokemonContext);

  useEffect(() => {
    const filtrar = poke.filter((item) => Number(item.data.id) === Number(id));
    setFilter(filtrar);
  }, [history.location.pathname, id, poke, setFilter]);

  let kg = 0.45359237;

  let cm = 2.54;

  const HashClickPrevious = (id) => {
    history.push(`/pokemonPrevious/${id - 1}`);
  };

  const HashClickNext = (id) => {
    history.push(`/pokemonNext/${id + 1}`);
  };

  return (
    <>
      {filter ? (
        <ContainerGeneral>
          {filter.map((item) => (
            <ContainerPokemon>
              <ContainerAnteriorSiguente>
                <button onClick={() => HashClickPrevious(item.data.id)}>
                  Anterior
                </button>
              </ContainerAnteriorSiguente>
              <ContainerTajeta>
                <ContainerTituloImg>
                  <ContainerImg>
                    <img src={item.data.sprites.front_default} alt="" />
                  </ContainerImg>
                  <div>
                    <h1>
                      {item.data.name} <span> ##{item.data.id} </span>
                    </h1>
                  </div>
                </ContainerTituloImg>
                <ContainerInfo>
                  <ContainerMedidas>
                    <p>
                      Height <br></br>
                      <span>
                        <span>"{item.data.height}" </span>
                        <br></br>
                        {item.data.height * cm.toFixed(2)} Cm
                      </span>
                    </p>
                    <p>
                      Weigth <br></br>
                      <span>
                        <span>{item.data.weight} Lbs </span>
                        <br></br>
                        {item.data.weight * kg.toFixed(2)} Kg
                      </span>
                    </p>
                  </ContainerMedidas>
                  <ContainerMedidas>
                    <p>
                      Type <br></br>
                      <span> {item.data.types[0].type.name} </span>
                    </p>
                    <p>
                      Abillities <br></br>
                      <span> {item.data.abilities[0].ability.name} </span>
                    </p>
                  </ContainerMedidas>
                </ContainerInfo>
              </ContainerTajeta>
              <ContainerAnteriorSiguente>
                <button onClick={() => HashClickNext(item.data.id)}>
                  Siguente
                </button>
              </ContainerAnteriorSiguente>
            </ContainerPokemon>
          ))}
          <Btn onClick={HashClick}>Volver</Btn>
        </ContainerGeneral>
      ) : (
        <Error error={error} />
      )}
    </>
  );
};

export default Pokemones;
