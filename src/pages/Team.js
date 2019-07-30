import React, { useState, useEffect } from "react";
import { fetchTeams } from "../API"
import { TeamsGrid, Loader, SearchInput } from "../components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  loader: {
    minHeight: "80vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});


const HomePage = () => {
  const [teamList, setTeamList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchTeams(setTeamList);
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

  const classes = useStyles();
  return (
    <div>
      <SearchInput
        searchChange={onSearchChange}
        searchState={search}
        clearSearch={onSearchClearBtnClick}
      />
      {teamList.length === 0 ? <div className={classes.loader}><Loader/></div> : <TeamsGrid teams={filteredTeams} /> }
    </div>
  );
};

export default HomePage;
