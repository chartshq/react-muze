import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import Cross from './Examples/CrossInteractive/Cross3';

ReactDOM.render(
  <React.StrictMode>
    <Cross />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
