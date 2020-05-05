import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Constants from "../../util/constants";
import "./Header.css";

const Header = (props) => (
  <header class="navbar navbar-expand flex-column flex-md-row bd-navbar px-lg-4">
    <Link to="/" className="nav-link home-link">
      <span class="header-logo"></span>
    </Link>
    <Navbar routes={Constants.Routes}></Navbar>
    {/* this uses a constant set of routes TODO a better way to pull out set of routes */}
  </header>
);

export default Header;
