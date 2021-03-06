import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// We can use a seperate component for each list item or
function NavItem(props) {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={props.route}>
        {props.label}
      </Link>
    </li>
  );
}

const Navbar = (props) => (
  <>
    <div className="navbar-nav-scroll">
      <nav>
        <ul className="navbar-nav bd-navbar-nav flex-row">
          {props.routes ? (
            props.routes.map((item) => (
              <NavItem
                key={item.id}
                route={item.route}
                label={item.label}
              ></NavItem>
            ))
          ) : (
            <></>
          )}
        </ul>
      </nav>
    </div>
  </>
);

export default Navbar;
