import React from "react";
import "./Nav.css";

const Nav = props => (
  <div className="navWrap">
  <h1 className="nav">{props.children}</h1>
  <button className="navButton blue" onClick={() => props.reset()}>Reset</button>
  </div>
);

export default Nav;
