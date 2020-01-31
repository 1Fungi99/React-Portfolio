import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";

// Importing components
import Nav from "./components/nav";
import Home from "./components/home";
import HomeFooter from "./components/footer";
import Contact from "./components/contact";
import PortfolioContent from "./components/components-in-components/portfolio-content";
import AboutMeContent from "./components/components-in-components/about-me-content";

import * as serviceWorker from "./serviceWorker";

// Router
// =============================================================
ReactDOM.render(
  <Router>
    <Nav />,
    <div>
      <Switch>
        <Route path="/portfolio">
          <PortfolioContent />
          <HomeFooter />
        </Route>
        <Route path="/about-me">
          <AboutMeContent />
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
