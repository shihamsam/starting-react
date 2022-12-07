import "./App.css";

import styled from "@emotion/styled";

import { useEffect, useReducer, useState } from "react";

import PokemonInfo from "./components/PokemonInfo";
import PokemonTable from "./components/PokemonTable";
import PokemonFilter from "./components/PokemonFilter";

import PokemonContext from "./PokemonContext";

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
      };
    case "SET_SELECTED_POKEMON":
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    default:
      throw new Error("No action");
  }
};

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

  const [state, dispatch] = useReducer(pokemonReducer, {
    pokemon: [],
    filter: "",
    selectedPokemon: null,
  });

  useEffect(() => {
    fetch("http://localhost:3000/starting-react/pokemon.json")
      .then((resp) => resp.json())
      .then((data) =>
        dispatch({
          type: "SET_POKEMON",
          payload: data,
        })
      );
  }, []);

  if (!state.pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <PokemonContext.Provider
      value={{
        filter,
        filterSet,
        selectedItem,
        selectedItemSet,
        pokemon,
        pokemonSet,
        state,
        dispatch,
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
