import React, { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";
import styled from "@emotion/styled";
import { useHistory, Link } from "react-router-dom";

const ContainerProducto = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid rgba(26, 196, 187, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
  padding: 10px;
`;

const ContainerImgProducto = styled.div`
  width: 100%;
  height: 200px;
  text-align: center;
  background: #80ded9;
`;

const Img = styled.img`
  width: 200px;
  margin: 5px;
`;

const ContainerInfoProducto = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TituloProducto = styled.h1`
  font-weight: 700;
  font-size: 1.4rem;
  font-style: italic;
  text-transform: uppercase;
`;
const TituloTotal = styled.p``;

const Pokemon = () => {
  const history = useHistory();
  const { poke } = useContext(PokemonContext);

  const onClickImgPoke = (id) => {
    history.push(`/pokemon/:${id}`);
  };

  return (
    <>
      {poke.map((item) => (
        <ContainerProducto>
          <Link onClick={() => onClickImgPoke(item.data.id)}>
            <ContainerImgProducto>
              <Img src={item.data.sprites.front_default} alt="" />
            </ContainerImgProducto>
          </Link>
          <ContainerInfoProducto>
            <TituloProducto> {item.data.name} </TituloProducto>
            <TituloTotal>{item.data.id}</TituloTotal>
          </ContainerInfoProducto>
        </ContainerProducto>
      ))}
    </>
  );
};

export default Pokemon;
