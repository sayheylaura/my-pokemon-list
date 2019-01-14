import React, { Component } from "react";

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

export default Pokemon;
