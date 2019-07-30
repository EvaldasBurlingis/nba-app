import React, { useState, useEffect } from "react";
import { TeamsGrid, Loader, SearchInput } from "../components";
import axios from "axios";
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

  const classes = useStyles();
  return (
    <div>
      <SearchInput
        searchChange={onSearchChange}
        searchState={search}
        clearSearch={onSearchClearBtnClick}
      />
      {contentLoading ? <div className={classes.loader}><Loader/></div> : <TeamsGrid teams={filteredTeams} /> }
    </div>
  );
};

export default HomePage;
