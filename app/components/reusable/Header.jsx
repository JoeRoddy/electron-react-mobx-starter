import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import { inject } from "mobx-react";

class Header extends Component {
  render() {
    return (
      <div>
        <Link to={"/"}>home</Link> -|-
        <Link to={"/todos"}>todo list!!!</Link> -|-
        <Link to={"/nameSaver"}>my name</Link>
      </div>
    );
  }
}

export default Header;
