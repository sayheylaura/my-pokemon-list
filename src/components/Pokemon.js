import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Pokemon extends Component {
  render() {
    const { url, name, types } = this.props;
    return (
      <Fragment>
        <img src={url} alt={name} />
        <h2>{name}</h2>
        <ul>
          {types.map((type, i) => {
            return <li key={i}>{type}</li>;
          })}
        </ul>
      </Fragment>
    );
  }
}

Pokemon.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Pokemon;
