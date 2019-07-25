import React, { useState, useEffect } from "react";
import { HomeGrid, Loader, SearchInput } from "../components";
import axios from "axios";

const HomePage = () => {
  const [teamList, setTeamList] = useState([]);
  const [contentLoading, setContentLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchTeams = async () => {
     await axios.get("https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387")
      .then(res => {
        setTeamList(res.data.teams);
        setContentLoading(false);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchTeams();
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
      <SearchInput
        searchChange={onSearchChange}
        searchState={search}
        clearSearch={onSearchClearBtnClick}
      />
      {contentLoading ? <div className="fw-center"><Loader/></div> : <HomeGrid teams={filteredTeams} /> }
    </div>
  );
};

export default HomePage;
