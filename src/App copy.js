import React, { Component } from "react";
import { TeamList, NavBar, Loader } from "./components";
import "./style/main.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      teams: [],
      search: "",
      selectedConference: "",
      loading: true
    };
  }

  // Get teams from API
  // Show loader before teams are loaded
  componentDidMount() {
    fetch("https://www.balldontlie.io/api/v1/teams")
      .then(res => res.json())
      .then(data => this.setState({ teams: data.data, loading: false }))
      .catch(err => console.error(err));
  }

  // TEAM SEARCH
  onSearchChange = e => {
    this.setState({ search: e.target.value });
  };

  // CLEAR SEARCH FIELD
  // If search field is not empty, add button to clear it
  onSearchClearBtnClick = e => {
    this.setState({ search: "" });
  };

  // SELECT EAST CONFERENCE BUTTON
  onEastButtonClick = e => {
    this.state.selectedConference === "east"
      ? this.setState({ selectedConference: "" })
      : this.setState({ selectedConference: "east" });
  };

  // SELECT WEST CONFERENCE BUTTON
  onWestButtonClick = e => {
    this.state.selectedConference === "west"
      ? this.setState({ selectedConference: "" })
      : this.setState({ selectedConference: "west" });
  };

  render() {
    const { teams, selectedConference, loading, search } = this.state;
    // FILTER TEAMS BY SELECTED CONFERENCE
    const filterConference = teams.filter(team => {
      const { conference } = team;
      return conference
        .toLowerCase()
        .includes(selectedConference.toLowerCase());
    });

    // FILTER BY SEARCH INPUT
    const filterSearch = filterConference.filter(team => {
      const { full_name } = team;
      return full_name.toLowerCase().includes(search.toLowerCase());
    });

    return (
      <div>
        <NavBar
          searchChange={this.onSearchChange}
          eastButtonClick={this.onEastButtonClick}
          westButtonClick={this.onWestButtonClick}
          conference={selectedConference}
          searchState={search}
          clearSearch={this.onSearchClearBtnClick}
        />
        <div className="App">
          {loading ? (
            <Loader loading={loading} />
          ) : (
            <TeamList teams={filterSearch} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
