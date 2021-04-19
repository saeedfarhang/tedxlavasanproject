import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
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
        <Route exact path="/" component={Home}>
          {/* <Home /> */}
        </Route>
        <Route exact path="/faq" component={Faq}>
          {/* <Faq /> */}
        </Route>
        <Route exact path="/how" component={HowSignup}>
          {/* <HowSignup /> */}
        </Route>
        <Route exact path="/speakers" component={Speakers}>
          {/* <Speakers /> */}
        </Route>
        <Route exact path="/signup" component={SignUp}>
          {/* <SignUp /> */}
        </Route>
        <Route exact path="/speakers/:id" component={SpeakerDetail}>
          {/* <SpeakerDetail /> */}
        </Route>
      </Switch>
    </Router>
  );
}
