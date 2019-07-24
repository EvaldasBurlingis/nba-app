import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loader, NavBar, HomeGrid } from "./components";

const App = () => {
  // STATE
  const [teamList, setTeamList] = useState([]);
  const [contentLoading, setContentLoading] = useState(true);
  const [search, setSearch] = useState("");

  // FETCH TEAM LIST
  useEffect(() => {
    axios
      .get(
        "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387"
      )
      .then(res => {
        setTeamList(res.data.teams);
        setContentLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  // TEAM SEARCH
  const onSearchChange = e => {
    setSearch(e.target.value);
  };

  // CLEAR SEARCH FIELD
  // If search field is not empty, add button to clear it
  const onSearchClearBtnClick = e => {
    setSearch("");
  };

  // FILTER BY SEARCH INPUT
  const filteredTeams = teamList.filter(team => {
    const { strTeam: teamName } = team;
    return teamName.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <NavBar
        searchChange={onSearchChange}
        searchState={search}
        clearSearch={onSearchClearBtnClick}
      />
      <div className="App">
        {contentLoading ? (
          <div className="fw-center"><Loader loading={contentLoading} /></div>
        ) : (
          <HomeGrid teams={filteredTeams} />
        )}
      </div>
    </div>
  );
};

export default App;
