import React from "react";
const REACT_VERSION = React.version;
const REDUX_VERSION = "4.0.5";

const Footer = () => (
  <footer>
    <div class="container-fluid">
      <div class="row flex-xl-nowrap">
        <div class="col-4"></div>
      </div>
      <div class="row flex-xl-nowrap">
        <div class="col-4">
          <p>Copyright ©{new Date().getFullYear()} Chad Paynter</p>
        </div>
        <div class="col-4">
          <p>
            <b>
              <span class="react-logo">react.js</span>
            </b>{" "}
            <i>
              version {REACT_VERSION} + Redux {REDUX_VERSION}
            </i>
          </p>
        </div>
        <div class="col-4">
          <a href="https://linkedin.com/in/chadpaynter/">LinkedIn</a>
          <a href="https://github.com/degero">Github</a>
          {/* <a href="/Privacy">Privacy Policy</a> */}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
