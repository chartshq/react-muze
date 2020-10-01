import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Title from "./Title-Subtitle/Title-html";
// import Test from "./Test";
// import Border from "./API/Border";
import Any from "./API/Layers";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Any />
    {/* <Title /> */}
    {/* <Test /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
