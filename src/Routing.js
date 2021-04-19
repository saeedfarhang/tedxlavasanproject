import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import HowSignup from "./pages/HowSignup";
import SignUp from "./pages/SignUp";
import SpeakerDetail from "./pages/SpeakerDetail";
import Speakers from "./pages/Speakers";
export default function Routing(props) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/faq">
          <Faq />
        </Route>
        <Route exact path="/how">
          <HowSignup />
        </Route>
        <Route exact path="/speakers">
          <Speakers />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/speakers/:id">
          <SpeakerDetail />
        </Route>
      </Switch>
    </Router>
  );
}
