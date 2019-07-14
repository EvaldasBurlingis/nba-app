import React, { Component } from "react";
import { TeamList } from "./components";
import "./style/main.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      teams: []
    };
  }

  // Get teams from API
  componentDidMount() {
    fetch("https://www.balldontlie.io/api/v1/teams")
      .then(res => res.json())
      .then(data => this.setState({ teams: data.data }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <TeamList teams={this.state.teams} />
      </div>
    );
  }
}

export default App;
