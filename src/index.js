import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import configureStore from "./redux/store/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  gtmId: process.env.REACT_APP_GANALYTICS_TAG_ID
}
TagManager.initialize(tagManagerArgs)
const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById("root")
);
