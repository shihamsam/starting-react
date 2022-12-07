import { useContext } from "react";
import PokemonContext from "../PokemonContext";
import PokemonType from "../PokemonType";

const PokemonInfo = () => {
  const { selectedItem } = useContext(PokemonContext);

  return selectedItem ? (
    <div>
      <h1>{selectedItem.name.english}</h1>
      <table>
        {Object.keys(selectedItem.base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{selectedItem.base[key]}</td>
          </tr>
        ))}
      </table>
    </div>
  ) : null;
};

PokemonInfo.propTypes = PokemonType;

export default PokemonInfo;
