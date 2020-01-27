import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";

// importing components
import Nav from "./components/nav";
import Home from "./components/home";
import HomeFooter from "./components/footer";

// Card Components for portfolio
import CardContent from "./components/cards/card-template";
import ShelveIt from "./components/cards/shelve-it";
import DestinationStation from "./components/cards/destination-station";
import Liri from "./components/cards/liri";
import Bootstrap from "./components/cards/portfolio-old";

import App from "./App";

import * as serviceWorker from "./serviceWorker";

// Router
// =============================================================
ReactDOM.render(
  <Router>
    <Nav />,
    <div>
      <Switch>
        <Route path="/portfolio">
          <div id="portfolio-buffer">
            <div
              className="card-deck container text-center"
              id="portfolio-container"
            >
              <div classname="row">
                <div className="card">
                  <ShelveIt />
                </div>
                <div className="card">
                  <DestinationStation />
                </div>
              </div>
              <div classname="row">
                <div className="card">
                  <Liri />
                </div>
                <div className="card">
                  <Bootstrap />
                </div>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/about-me">
          <Home />,
          <HomeFooter />
        </Route>

        {/* Default Route */}
        <Route exect={true} path="/">
          <Home />,
          <HomeFooter />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
