import React, { useState, useEffect } from "react";
import axios from "axios";
import { TeamList, NavBar, Loader } from "./components";
import "./style/main.css";

const App = () => {
  //  STATE
  const [teams, setTeams] = useState([]);
  const [teamSearch, setTeamSearch] = useState("");
  const [filterByConferece, setFilterByConferece] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://data.nba.net/json/cms/noseason/sportsmeta/nba_teams.json"
      )
      .then(res => {
        setTeams(res.data.sports_content.teams.team);
        setLoading(false);
      })
      .catch(err => console.error(err));
  });

  // TEAM SEARCH
  const onSearchChange = e => {
    setTeamSearch(e.target.value);
  };

  // CLEAR SEARCH FIELD
  // If search field is not empty, add button to clear it
  const onSearchClearBtnClick = e => {
    setTeamSearch("");
  };

  // SELECT EAST CONFERENCE BUTTON
  const onEastButtonClick = e => {
    filterByConferece === "east"
      ? setFilterByConferece("")
      : setFilterByConferece("east");
  };

  // SELECT WEST CONFERENCE BUTTON
  const onWestButtonClick = e => {
    filterByConferece === "west"
      ? setFilterByConferece("")
      : setFilterByConferece("west");
  };

  let filterNbaTeams = teams.filter(team => team.is_nba_team === true);

  return (
    <div>
      <NavBar
        searchChange={onSearchChange}
        eastButtonClick={onEastButtonClick}
        westButtonClick={onWestButtonClick}
        conference={filterByConferece}
        searchState={teamSearch}
        clearSearch={onSearchClearBtnClick}
      />
      <div className="App">
        {loading ? (
          <Loader loading={loading} />
        ) : (
          <TeamList teams={filterNbaTeams} />
        )}
      </div>
    </div>
  );
};

export default App;
