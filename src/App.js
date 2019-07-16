import React, { Component } from "react";
import { TeamList, NavBar, Loader } from "./components";
import "./style/main.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      teams: [],
      search: "",
      conference: "",
      loading: true
    };
  }

  // Get teams from API
  componentDidMount() {
    fetch("https://www.balldontlie.io/api/v1/teams")
      .then(res => res.json())
      .then(data => this.setState({ teams: data.data, loading: false }))
      .catch(err => console.error(err));
  }

  // Team Search
  onSearchChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  // Navbar EasternConference click
  onEastButtonClick = event => {
    let newState;
    this.state.conference === "east" ? (newState = "") : (newState = "east");
    this.setState({
      conference: newState
    });
  };

  // Navbar western conference click
  onWestButtonClick = event => {
    let newState;
    this.state.conference === "west" ? (newState = "") : (newState = "west");
    this.setState({
      conference: newState
    });
  };

  render() {
    //filter teams by conference
    const filterConference = this.state.teams.filter(team => {
      const teamConference = `${team.conference}`;

      let searchedConf = teamConference
        .toLowerCase()
        .includes(this.state.conference.toLowerCase());

      return searchedConf;
    });

    //filter by search
    const filterSearch = filterConference.filter(team => {
      const teamName = `${team.full_name}`;

      //check search
      let searchedTeam = teamName
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
      return searchedTeam;
    });

    return (
      <div>
        <NavBar
          searchChange={this.onSearchChange}
          eastButtonClick={this.onEastButtonClick}
          westButtonClick={this.onWestButtonClick}
          conference={this.state.conference}
        />
        <div className="App">
          {this.state.loading ? (
            <Loader loading={this.state.loading} />
          ) : (
            <TeamList teams={filterSearch} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
