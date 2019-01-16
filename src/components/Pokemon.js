import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./Pokemon.css";

class Pokemon extends Component {
  render() {
    const { url, name, types } = this.props;
    return (
      <Fragment>
        <div className="item__image-container">
          <img className="item__image" src={url} alt={name} />
        </div>
        <h2 className="item__name">{name}</h2>
        <ul className="item__types-list">
          {types.map((type, i) => (
            <li className="item__types-item" key={i}>{type}</li>
          ))}
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
