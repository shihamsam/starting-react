import PokemonRow from "./PokemonRow";
import usePokemonStore from "../store";

const PokemonTable = () => {
  const pokemon = usePokemonStore((state) => state.pokemon);
  const filter = usePokemonStore((state) => state.filter);
  const setSelectedPokemon = usePokemonStore(
    (state) => state.setSelectedPokemon
  );

  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemon
          .filter((pokemon) =>
            pokemon.name.english
              .toLocaleLowerCase()
              .includes(filter.toLocaleLowerCase())
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              pokemon={pokemon}
              key={pokemon.id}
              onSelect={(pokemon) => setSelectedPokemon(pokemon)}
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
