import "./App.css";

import styled from "@emotion/styled";

import { useEffect, useState } from "react";

import PokemonInfo from "./components/PokemonInfo";
import PokemonTable from "./components/PokemonTable";
import PokemonFilter from "./components/PokemonFilter";

import PokemonContext from "./PokemonContext";

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-column-gap: 1rem;
`;

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

function App() {
  const [filter, filterSet] = useState("");
  const [selectedItem, selectedItemSet] = useState("");
  const [pokemon, pokemonSet] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/starting-react/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => pokemonSet(data));
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        filter,
        filterSet,
        selectedItem,
        selectedItemSet,
        pokemon,
        pokemonSet,
      }}
    >
      <PageContainer>
        <Title>Pokemon Search</Title>
        <PokemonFilter />
        <TwoColumnLayout>
          <div>
            <PokemonTable />
          </div>
          <PokemonInfo />
        </TwoColumnLayout>
      </PageContainer>
    </PokemonContext.Provider>
  );
}

export default App;
