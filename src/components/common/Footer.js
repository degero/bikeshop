import React from "react";
const REACT_VERSION = React.version;
const REDUX_VERSION = "4.0.5";

const Footer = () => (
  <footer>
    <div className="container-fluid fixed-bottom footer-container">
      <div className="row flex-xl-nowrap">
        <div className="col-4"></div>
      </div>
      <div className="row flex-xl-nowrap">
        <div className="col-4">
          <p>Copyright ©{new Date().getFullYear()} Chad Paynter</p>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <p>
            <b>
              <span className="react-logo">react.js</span>
            </b>{" "}
            <i>
              version {REACT_VERSION} + Redux {REDUX_VERSION}
            </i>
          </p>
        </div>
        <div className="col-4 d-flex justify-content-end">
          <p>
            <a className="link" href="https://linkedin.com/in/chadpaynter/">
              LinkedIn
            </a>
            &nbsp;|&nbsp;
            <a className="link" href="https://github.com/degero/bikeshop">
              Github
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
