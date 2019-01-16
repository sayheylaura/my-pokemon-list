import React, { Component } from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";
import "./pokeList.css";

class PokeList extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <ul className="app__card-list">
        {pokemon.map(item => {
          const { id, url, name, types } = item;
          return (
            <li key={id}>
              <Pokemon url={url} name={name} types={types} />;
            </li>
          );
        })}
      </ul>
    );
  }
}

PokeList.propTypes = {
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      types: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    })
  ).isRequired
};

export default PokeList;
