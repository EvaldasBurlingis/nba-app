import React, { useState, useEffect } from "react";
import { HomePage, TeamPage, PlayerPage, StandingsPage, TeamInfoPage } from "./pages"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import { NavBar } from "./components";

const App = () => {


  return (
    <Router>
      <NavBar />
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
