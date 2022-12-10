import "./App.css";

import styled from "@emotion/styled";

import PokemonInfo from "./components/PokemonInfo";
import PokemonTable from "./components/PokemonTable";
import PokemonFilter from "./components/PokemonFilter";

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
  return (
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
  );
}

export default App;
