import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const PokemonFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

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
