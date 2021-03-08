import React, { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

const ContainerProducto = styled.div`
  width: 200px;
  height: 300px;
  border: solid rgba(26, 196, 187, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
  padding: 10px;
  border-radius: 30px;
  box-sizing: border-box;
  :hover {
    overflow: hidden;
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
`;

const ContainerImgProducto = styled.div`
  width: 100%;
  height: 200px;
  text-align: center;
`;

const Img = styled.img`
  width: 200px;
  margin: 5px;
  cursor: pointer;
`;

const ContainerInfoProducto = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TituloProducto = styled.h2`
  font-weight: 900;
  font-size: 1.4rem;
  font-style: italic;
  color: #4f4f4f;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
`;
const TituloTotal = styled.p`
  color: #000;
  font-size: 1.2rem;
`;

const Pokemon = () => {
  const history = useHistory();
  const { poke } = useContext(PokemonContext);

  const onClickImgPoke = (id) => {
    history.push(`/pokemon/${id}`);
  };

  return (
    <>
      {poke.map((item) => (
        <ContainerProducto>
          <div onClick={() => onClickImgPoke(item.data.id)}>
            <ContainerImgProducto>
              <Img src={item.data.sprites.front_default} alt="" />
            </ContainerImgProducto>
          </div>
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
