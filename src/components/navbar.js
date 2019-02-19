import React from "react";
import { Link } from "gatsby";
import Social from "./social.js";
import styles from "./navbar.module.css";

const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem"}}>
    <Link className={styles.navbar_link} to={props.to}>{props.children}</Link>
  </li>
)

export default Navbar => (
  <div className="navbar-div">
    <ul className={styles.navbar_ul}>
      <ListLink to="/">ARCHIVE</ListLink>
      <ListLink to="/about">ABOUT</ListLink>
      <ListLink to="/projects">PROJECTS</ListLink>
    </ul>
    <Social />
  </div>
)
