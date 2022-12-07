import styled from "@emotion/styled";
import { useContext } from "react";
import PokemonContext from "../PokemonContext";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const PokemonFilter = () => {
  const {
    state: { filter },
    dispatch,
  } = useContext(PokemonContext);

  return (
    <Input
      value={filter}
      onChange={(evt) =>
        dispatch({ type: "SET_FILTER", payload: evt.target.value })
      }
    />
  );
};

export default PokemonFilter;
