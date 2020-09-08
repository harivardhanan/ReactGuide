import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./containers/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App appTitle="Person Mgmt" />
  </React.StrictMode>,
  rootElement
);
