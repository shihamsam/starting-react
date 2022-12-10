import create from "zustand";

const usePokemonStore = create((set) => ({
  pokemon: [],
  filter: "",
  selectedPokemon: null,

  setPokemon: (pokemon) => set((state) => ({ ...state, pokemon })),
  setFilter: (filter) => set((state) => ({ ...state, filter })),
  setSelectedPokemon: (selectedPokemon) =>
    set((state) => ({ ...state, selectedPokemon })),
}));

fetch("http://localhost:3000/starting-react/pokemon.json")
  .then((resp) => resp.json())
  .then((pokemon) => {
    usePokemonStore.setState((state) => ({ ...state, pokemon }));
  });

export default usePokemonStore;
