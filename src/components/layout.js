import React from "react";
import Navbar from "./navbar.js";

export default ({ children }) => (
  <div className="layout-div">
    <Navbar />
    {children}
  </div>
)
