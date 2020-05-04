import React from "react";
import Navbar from "../navbar/Navbar";
import Constants from "../../util/constants";

const Header = (props) => (
  <header class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar px-lg-4">
    <span class="site-logo"></span>
    <Navbar routes={Constants.Routes}></Navbar>
  </header>
);

export default Header;
