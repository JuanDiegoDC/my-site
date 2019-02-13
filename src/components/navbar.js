import React from "react";
import { Link } from "gatsby";

const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem"}}>
    <Link className="navbar-link" to={props.to}>{props.children}</Link>
  </li>
)

export default Navbar => (
  <div className="navbar-div">
    <ul className="navbar-ul">
      <ListLink to="/">ARCHIVE</ListLink>
      <ListLink to="/about">ABOUT</ListLink>
    </ul>
  </div>
)
