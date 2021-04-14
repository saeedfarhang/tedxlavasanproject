import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
export default function Routing(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/faq">
          <Faq />
        </Route>
      </Switch>
    </Router>
  );
}
