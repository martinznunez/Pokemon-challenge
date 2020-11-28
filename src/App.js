import React from "react";
import PokemonProvider from "./context/pokemonContext";
import ListaPokemones from "./components/ListaPokemones";
import styled from "@emotion/styled";
import Pokemones from "./components/Pokemones";
import Next from "./components/Next";
import Previous from "./components/Previous";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ContainerGeneral = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <>
      <Router>
        <PokemonProvider>
          <ContainerGeneral>
            <Switch>
              <Route exact path="/" component={ListaPokemones} />
              <Route exact path="/pokemon/:id" component={Pokemones} />
              <Route exact path="/pokemonNext/:id" component={Next} />
              <Route exact path="/pokemonPrevious/:id" component={Previous} />
            </Switch>
          </ContainerGeneral>
        </PokemonProvider>
      </Router>
    </>
  );
}

export default App;
