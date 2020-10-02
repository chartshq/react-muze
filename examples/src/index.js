import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import Borders from './Borders/index';
import Basic from "./Demo/Basic";
import Layer from "./Demo/Layer";
import Operation from "./Demo/Operation";
import Cross from "./Demo/Cross";
import Title from "./Demo/Title";
import Scroll from "./Demo/Scroll";
import Nesting from "./Demo/Nesting";
import Nesting1 from "./Demo/Nesting1";
import Bar1 from "./WebDemo/Bar/Bar1";
import Bar2 from "./WebDemo/Bar/Bar2";
import Bar4 from "./WebDemo/Bar/Bar4";
import Bar5 from "./WebDemo/Bar/Bar5";
import Bar7 from "./WebDemo/Bar/Bar7";
import Bar6 from "./WebDemo/Bar/Bar6";

import Pie1 from './WebDemo/Pie/Pie1';
import Pie2 from "./WebDemo/Pie/Pie2";
import Pie3 from "./WebDemo/Pie/Pie3";
import Pie4 from "./WebDemo/Pie/Pie4";

import Scatter1 from "./WebDemo/Scatter/Scatter1";
import Scatter2 from "./WebDemo/Scatter/Scatter2";
import Scatter3 from "./WebDemo/Scatter/Scatter3";
import Scatter4 from "./WebDemo/Scatter/Scatter4";
import Scatter6 from "./WebDemo/Scatter/Scatter6";

import Line1 from "./WebDemo/Line/Line1";
import Line2 from "./WebDemo/Line/Line2";
import Line3 from "./WebDemo/Line/Line3";
import Line4 from "./WebDemo/Line/Line4";
import Line5 from "./WebDemo/Line/Line5";

import Area1 from "./WebDemo/Area/Area1";
import Area2 from "./WebDemo/Area/Area2";

// import TooltipStyling from "./WebDemo/CustomCSS/TooltipStyling";
// import DarkThemeWithGrid from "./WebDemo/CustomCSS/DarkThemeWithGrid";
// import DarkBackground from "./WebDemo/CustomCSS/DarkBackground";
// import BackgroundImageTheme from "./WebDemo/CustomCSS/BackgroundImageTheme";
// import LightTheme from "./WebDemo/CustomCSS/LightTheme";

import AxisTickLabelsFormatting from "./WebDemo/ChartConfiguration/AxisTickLabelsFormatting";

import FragmentedTooltip from "./WebDemo/Tooltips/FragmentedTooltip";

import Heatmap1 from './WebDemo/Heatmap/Heatmap1';

import Crosstab1 from './WebDemo/Crosstab/Crosstab1';
import Crosstab2 from './WebDemo/Crosstab/Crosstab2';
import Crosstab3 from './WebDemo/Crosstab/Crosstab3';
import Crosstab4 from './WebDemo/Crosstab/Crosstab4';
import Crosstab5 from './WebDemo/Crosstab/Crosstab5';
import Crosstab7 from './WebDemo/Crosstab/Crosstab7';

import Legend1 from './WebDemo/Legend/Legend1';
import Legend2 from './WebDemo/Legend/Legend2';
import Legend3 from './WebDemo/Legend/Legend3';
import Legend4 from './WebDemo/Legend/Legend4';

import Compose1 from './WebDemo/Composability/Compose1';
import Compose2 from './WebDemo/Composability/Compose2';

import Large1 from './WebDemo/Large/Large1';

ReactDOM.render(
  <React.StrictMode>
    {/* <FragmentedTooltip /> */}
    {/* <TooltipStyling /> */}
    {/* <Border /> */}
    {/* <Title /> */}
    {/* <Test /> */}
    {/* <Basic /> */}
    {/* <Layer /> */}
    {/* <Operation /> */}
    {/* <Cross /> */}
    {/* <Title /> */}
    {/* <Scroll /> */}
    {/* <Nesting /> */}
    {/* <Nesting1 /> */}

    {/* <Bar1 />
    <Bar2 />
    <Bar4 />
    <Bar5 />
    <Bar6 />
    <Bar7 /> */}

    <Pie1 />
    <Pie2 />
    <Pie3 />
    <Pie4 />

    {/* <Scatter1 />
    <Scatter2 />
    <Scatter3 />
    <Scatter4 /> */}

    {/* <Scatter6 /> */}

    {/* <Area1 />
    <Area2 /> */}

    {/* <Heatmap1 /> */}

    {/* <Crosstab1 />
    <Crosstab2 />
    <Crosstab3 />
    <Crosstab4 />
    <Crosstab5 />
    <Crosstab7 /> */}
    {/* <Borders /> */}
    {/* <Legend1 />
    <Legend2 />
    <Legend3 />
    <Legend4 /> */}

    {/* <Compose1 /> */}
    {/* <Compose2 /> */}

    {/* <Large1 /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
