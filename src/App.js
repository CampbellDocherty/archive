import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Lessons"></Route>
        <Route path="/Films"></Route>
        <Route path="/Myths"></Route>
        <Route path="/Thassos"></Route>
        <Route path="/">
          <LandingPage></LandingPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
