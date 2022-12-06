import React from "react";
import "./App.css";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

// import React, { useEffect, useState } from "react";

const PokemonRow = ({ pokemon, onSelect }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSelect(pokemon)}
      >
        Select!
      </Button>
    </td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    type: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
  }),
  onSelect: PropTypes.func,
};

const PokemonInfo = ({ name, base }) => (
  <div>
    <h1>{name.english}</h1>
    <table>
      {Object.keys(base).map((key) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{base[key]}</td>
        </tr>
      ))}
    </table>
  </div>
);

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string,
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
};

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      pokemon: [],
      selectedItem: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/starting-react/pokemon.json")
      .then((resp) => resp.json())
      .then((pokemon) =>
        this.setState({
          ...this.state,
          pokemon,
        })
      );
  }

  render() {
    return (
      <Container>
        <Title>Pokemon Search</Title>
        <Input
          value={this.state.filter}
          onChange={(evt) =>
            this.setState({
              ...this.state,
              filter: evt.target.value,
            })
          }
        />

        <TwoColumnLayout>
          <div>
            <table width="100%">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {this.state.pokemon
                  .filter((pokemon) =>
                    pokemon.name.english
                      .toLocaleLowerCase()
                      .includes(this.state.filter.toLocaleLowerCase())
                  )
                  .slice(0, 20)
                  .map((pokemon) => (
                    <PokemonRow
                      pokemon={pokemon}
                      key={pokemon.id}
                      onSelect={(pokemon) =>
                        this.setState({ ...this.state, selectedItem: pokemon })
                      }
                    />
                  ))}
              </tbody>
            </table>
          </div>
          <div>
            {this.state.selectedItem && (
              <div>
                <PokemonInfo {...this.state.selectedItem} />
              </div>
            )}
          </div>
        </TwoColumnLayout>
      </Container>
    );
  }
}

export default App;
