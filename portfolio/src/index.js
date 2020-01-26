import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// importing components
import Nav from "./components/nav";
import Home from "./components/home";

import CardContent from "./components/card";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

// Portfolio Layout
// =============================================================
// ReactDOM.render(
//   <div>
//     <Nav />,
//     <div className="card-deck container-fluid text-center">
//       <div className="card">
//         <CardContent />,
//       </div>
//       <div className="card">
//         <CardContent />,
//       </div>
//       <div className="card">
//         <CardContent />,
//       </div>
//       <div className="card">
//         <CardContent />,
//       </div>
//     </div>
//   </div>,
//   document.getElementById("root")
// );
// =============================================================

// Home Layout
// =============================================================
ReactDOM.render(
  <div>
    <Nav />,<div className="container-fluid text-center"></div>
    <Home />
  </div>,
  document.getElementById("root")
);
// =============================================================

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
