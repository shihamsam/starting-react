import styled from "@emotion/styled";
import usePokemonStore from "../store";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const PokemonFilter = () => {
  const filter = usePokemonStore((state) => state.filter);
  const setFilter = usePokemonStore((state) => state.setFilter);

  return (
    <Input value={filter} onChange={(evt) => setFilter(evt.target.value)} />
  );
};

export default PokemonFilter;
