import React, { Component } from "react";
import "./index.css";
import history from "./history";
import { Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage";

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}
