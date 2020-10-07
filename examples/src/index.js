import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import Compose1 from './Examples/Composability/Compose1';
import Compose2 from './Examples/Composability/Compose2';
import Compose3 from './Examples/Composability/Compose3';
import Compose4 from './Examples/Composability/Compose4';

ReactDOM.render(
  <React.StrictMode>
    <Compose1 />
    <Compose2 />
    <Compose3 />
    <Compose4 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
