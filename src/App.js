import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage/LandingPage";
import Thassos from "./Pages/Thassos/Thassos";
import Lessons from "./Pages/Lessons/Lessons";
import Myths from "./Pages/Myths/Myths";
import Films from "./Pages/Films/Films";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Lessons">
          <Lessons></Lessons>
        </Route>
        <Route path="/Films">
          <Films></Films>
        </Route>
        <Route path="/Myths">
          <Myths></Myths>
        </Route>
        <Route path="/Thassos">
          <Thassos></Thassos>
        </Route>
        <Route exact path="/">
          <LandingPage></LandingPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
