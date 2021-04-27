import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import HowSignup from "./pages/HowSignup";
import SignUp from "./pages/SignUp";
import SpeakerDetail from "./pages/SpeakerDetail";
import Speakers from "./pages/Speakers";
import SponserDetail from "./pages/SponserDetail";
import Sponsers from "./pages/Sponsers";
import WorkShop from "./pages/WorkShop";

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
        <Route exact path="/workshop">
          <WorkShop />
        </Route>
        <Route exact path="/speakers">
          <Speakers />
        </Route>
        <Route exact path="/sponsors">
          <Sponsers />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/speakers/:id" component={SpeakerDetail}></Route>
        <Route exact path="/sponsors/:id" component={SponserDetail}></Route>
      </Switch>
    </Router>
  );
}
