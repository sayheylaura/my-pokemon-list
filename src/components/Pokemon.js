import React, { Component } from "react";
import PropTypes from "prop-types";

class Pokemon extends Component {
  render() {
    const { url, name, types } = this.props;
    return (
      <li>
        <img src={url} alt="" />
        <h2>{name}</h2>
        <ul>
          {types.map((type, i) => {
            return <li key={i}>{type}</li>;
          })}
        </ul>
      </li>
    );
  }
}

Pokemon.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Pokemon;
