import React from "react";
import ReactDOM from "react-dom";
import App from "./models/App";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
