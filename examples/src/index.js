import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import * as serviceWorker from "./serviceWorker";

// import Cross from "./Examples/CrossInteractive/Cross3";
import SimpleBarChart from "./Examples/Bar/SimpleBarChart";
import HorizontalBarChart from "./Examples/Bar/HorizontalBarChart";
import GroupedBarChart from "./Examples/Bar/GroupedBarChart";
import StackedBarChart from "./Examples/Bar/StackedBarChart";
import BarChartWithMissingData from "./Examples/Bar/BarChartWithMissingData";
import RangePlotBar from "./Examples/Bar/RangePlotBar";
import Bar7 from "./Examples/Bar/Bar7";

import AreaChart from "./Examples/Area/AreaChart";
import StackedAreaChart from "./Examples/Area/StackedAreaChart";

import ReferenceLine from "./Examples/Composability/ReferenceLine";
import RangeArea from "./Examples/Composability/RangeArea";
import BoxPlot from "./Examples/Composability/BoxPlot";
import DotPlotTickChart from "./Examples/Composability/DotPlotTickChart";

import OverviewAndZoom from "./Examples/CrossInteractive/OverviewAndZoom";
import Cross3 from "./Examples/CrossInteractive/Cross3";
import InteractiveLayers from "./Examples/CrossInteractive/InteractiveLayers";

import Crosstab1 from "./Examples/Crosstab/Crosstab1";
import Crosstab2 from "./Examples/Crosstab/Crosstab2";
import Crosstab3 from "./Examples/Crosstab/Crosstab3";
import Crosstab4 from "./Examples/Crosstab/Crosstab4";
import Crosstab5 from "./Examples/Crosstab/Crosstab5";
import Crosstab6 from "./Examples/Crosstab/Crosstab6";
import Crosstab7 from "./Examples/Crosstab/Crosstab7";

ReactDOM.render(
  <React.StrictMode>
    {/* <SimpleBarChart />
    <HorizontalBarChart />
    <GroupedBarChart />
    <StackedBarChart />
    <BarChartWithMissingData />
    <RangePlotBar />
    <Bar7 /> */}

    {/* <AreaChart />
    <StackedAreaChart /> */}

    {/* <ReferenceLine />
    <RangeArea />
    <BoxPlot />
    <DotPlotTickChart /> */}

    {/* <OverviewAndZoom />
    <Cross3 />
    <InteractiveLayers /> */}

    <Crosstab1 />
    <Crosstab2 />
    <Crosstab3 />
    <Crosstab4 />
    <Crosstab5 />
    <Crosstab6 />
    <Crosstab7 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
