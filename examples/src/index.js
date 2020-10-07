import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import ReferenceLine from "./Examples/Composability/ReferenceLine";
import RangeArea from "./Examples/Composability/RangeArea";
import BoxPlot from "./Examples/Composability/BoxPlot";
import DotPlotTickChart from "./Examples/Composability/DotPlotTickChart";

ReactDOM.render(
  <React.StrictMode>
    <ReferenceLine />
    <RangeArea />
    <BoxPlot />
    <DotPlotTickChart />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
