import React from "react";
import {
  HomePage,
  TeamPage,
  PlayerPage,
  StandingsPage,
  TeamInfoPage
} from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "./components";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/team" exact component={TeamPage} />
        <Route path="/player" component={PlayerPage} />
        <Route path="/standings" component={StandingsPage} />
        <Route path="/team/:id" component={TeamInfoPage} />
      </Switch>
    </Router>
  );
};

export default App;
