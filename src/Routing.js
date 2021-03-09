import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
export default function Routing(props) {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
}
