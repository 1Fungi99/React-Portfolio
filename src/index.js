import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";

// importing components
import Nav from "./components/nav";
import Home from "./components/home";
import HomeFooter from "./components/footer";
import Contact from "./components/contact";

// Card Components for portfolio
import CardContent from "./components/cards/card-template";
import ShelveIt from "./components/cards/shelve-it";
import DestinationStation from "./components/cards/destination-station";
import Liri from "./components/cards/liri";
import Bootstrap from "./components/cards/portfolio-old";

import App from "./App";

import * as serviceWorker from "./serviceWorker";
import About from "./components/about";
import Skill from "./components/props/skills";

// Router
// =============================================================
ReactDOM.render(
  <Router>
    <Nav />,
    <div>
      <Switch>
        <Route path="/portfolio">
          <div id="portfolio-buffer">
            <div className="container" id="portfolio-container">
              <div classname="col-lg-2">
                <div className="card">
                  <ShelveIt />
                </div>
                <div className="card">
                  <DestinationStation />
                </div>
              </div>
              <div classname="col-lg-2">
                <div className="card">
                  <Liri />
                </div>
                <div className="card">
                  <Bootstrap />
                </div>
              </div>
            </div>
          </div>
          <HomeFooter />
        </Route>
        <Route path="/about-me">
          <div className="container-fluid about-me">
            <div className="header white-text text-center">Skills</div>
            <div className="row justify-content-center">
              <div className="col-lg-3">
                {/* Node.js */}
                <About
                  name={Skill[0].name}
                  src={Skill[0].src}
                  text={Skill[0].text}
                />
                {/* MySQL */}
                <About
                  name={Skill[1].name}
                  src={Skill[1].src}
                  text={Skill[1].text}
                />
                {/* JS */}
                <About
                  name={Skill[2].name}
                  src={Skill[2].src}
                  text={Skill[2].text}
                />
                {/* Bootstrap */}
                <About
                  name={Skill[3].name}
                  src={Skill[3].src}
                  text={Skill[3].text}
                />
              </div>
              <div className="col-lg-3">
                {/* Mongo */}
                <About
                  name={Skill[4].name}
                  src={Skill[4].src}
                  text={Skill[4].text}
                />
                {/* HTML */}
                <About
                  name={Skill[5].name}
                  src={Skill[5].src}
                  text={Skill[5].text}
                />
                {/* CSS */}
                <About
                  name={Skill[6].name}
                  src={Skill[6].src}
                  text={Skill[6].text}
                />
                {/* React */}
                <About
                  name={Skill[7].name}
                  src={Skill[7].src}
                  text={Skill[7].text}
                />
              </div>
              <div className="col-lg-3">
                {/* jQuery */}
                <About
                  name={Skill[8].name}
                  src={Skill[8].src}
                  text={Skill[8].text}
                />
                {/* Git */}
                <About
                  name={Skill[9].name}
                  src={Skill[9].src}
                  text={Skill[9].text}
                />
                {/* Firebase */}
                <About
                  name={Skill[10].name}
                  src={Skill[10].src}
                  text={Skill[10].text}
                />
                {/* VSCode */}
                <About
                  name={Skill[11].name}
                  src={Skill[11].src}
                  text={Skill[11].text}
                />
              </div>
            </div>
          </div>
          <HomeFooter />
        </Route>
        <Route path="/contact">
          <Contact />,
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
