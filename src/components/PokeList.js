import React, { Component } from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";

class PokeList extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <ul>
        {pokemon.map(item => {
          const { id, url, name, types } = item;
          return (
            <Pokemon
              key={id}
              url={url}
              name={name}
              types={types}
            />
          );
        })}
      </ul>
    );
  }
}

PokeList.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default PokeList;
