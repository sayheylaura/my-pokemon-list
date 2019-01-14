import React, { Component } from "react";
import "./App.css";
import PokeList from "./components/PokeList";
import pokemon from './data/pokemonData'

class App extends Component {
  constructor(props) {
    super(props);
    this.pokemon = pokemon;
  }

  render() {
    const { pokemon } = this;
    return (
      <div className="App">
        <h1>Mi lista de pokemon</h1>
        <PokeList pokemon={pokemon} />
      </div>
    );
  }
}

export default App;
