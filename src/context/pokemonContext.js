import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PokemonContext = createContext();

const PokemonProvider = (props) => {
  const [poke, setPoke] = useState([]);
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [filter, setFilter] = useState("");

  useEffect(() => {
    // const promesas = [];
    const todosLosPokemones = [];
    const getPoke = async () => {
      try {
        const url = "https://pokeapi.co/api/v2/pokemon/?limit=50";

        const respuesta = await axios.get(url);

        for await (let pokemon of respuesta.data.results) {
          const respuestaPokemon = await axios.get(pokemon.url);

          todosLosPokemones.push(respuestaPokemon);
        }
        // segunda solucion, obtener pokemon realizar una llamada x cada poke
        // respuesta.data.results.forEach((pokemon) => {
        //   const promesa = new Promise((resolve, reject) => {
        //     resolve(axios.get(pokemon.url));
        //   });
        //   promesas.push(promesa);
        // });

        // const todosLosPokemones = await Promise.all(promesas);
        setPoke(todosLosPokemones);
        setError(false);
      } catch (error) {
        return setError(true);
      }
    };

    getPoke();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        poke,
        setFilter,
        setError,
        filter,
        setInputValue,

        inputValue,
        error,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
