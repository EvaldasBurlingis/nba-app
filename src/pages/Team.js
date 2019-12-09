import React, { useState, useEffect } from "react";
import { fetchTeams } from "../API"
import { TeamsGrid, Loader, SearchInput } from "../components";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  loader: {
    minHeight: "80vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    boxShadow: "0 0 2rem rgba(0,0,0,0.1)",
    marginTop: "2rem",
    paddingTop: "1rem",
    paddingBottom: "2rem"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "black",
    boxShadow: "none",
  },
}));

const HomePage = () => {
  const [teamList, setTeamList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchTeams(setTeamList);
  }, []);

  const onSearchChange = e => {
    setSearch(e.target.value);
  };

  const onSearchClearBtnClick = e => {
    setSearch("");
  };

  const filteredTeams = teamList.filter(team => {
    const { strTeam: teamName } = team;
    return teamName.toLowerCase().includes(search.toLowerCase());
  });

  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs="12" className={classes.container}>
          <Paper className={classes.paper}>
            <Typography variant="h4" component="h2">
              NBA TEAMS
            </Typography>
            <SearchInput
              searchChange={onSearchChange}
              searchState={search}
              clearSearch={onSearchClearBtnClick}
            />
            {teamList.length === 0 ? <div className={classes.loader}><Loader /></div> : <TeamsGrid teams={filteredTeams} />}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
