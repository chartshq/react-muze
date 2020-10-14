import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// import BoxPlot from './Examples/Composability/BoxPlot';
import CustomTooltip from "./Examples/Tooltips/CustomTooltip";
import Tooltip from "./Examples/Tooltips/Tooltip";

ReactDOM.render(
  <React.StrictMode>
    <CustomTooltip />
    <Tooltip />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
