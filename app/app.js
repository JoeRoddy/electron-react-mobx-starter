import React from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route, hashHistory } from "react-router-dom";
import mobx from "mobx";

import Routes from "./Routes";

const rootElement = document.querySelector(
  document.currentScript.getAttribute("data-container")
);

// Enable MobX Strict Functionality
mobx.useStrict(true);

const StartPoint = (
  <Router history={hashHistory}>
    <div>
      <Route path="/" component={Routes} />
    </div>
  </Router>
);

render(StartPoint, rootElement);
