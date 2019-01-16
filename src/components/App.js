import React, { Component } from "react";
import PokeList from "./PokeList";
import pokemon from "../data/pokemonData";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.pokemon = pokemon;
  }

  render() {
    const { pokemon } = this;
    return (
      <div className="App">
        <h1 className="app__title">My pokemon list</h1>
        <PokeList pokemon={pokemon} />
      </div>
    );
  }
}

export default App;
