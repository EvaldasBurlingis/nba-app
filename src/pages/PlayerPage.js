import React, { useState, useEffect } from "react";
import axios from "axios";
import {  Loader, SearchInput } from "../components";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "black",
    boxShadow: "none"
  }
}));


const PlayerPage = () => {
  const [search, setSearch] = useState("");
  const [player, setPlayer] = useState([]);

  // TEAM SEARCH
  const onSearchChange = e => {
    setSearch(e.target.value);
  };

  // CLEAR SEARCH FIELD
  // If search field is not empty, add button to clear it
  const onSearchClearBtnClick = e => {
    setSearch("");
  };

  useEffect(() => {
    const fetchPlayer = async (search) => {
      await axios
        .get(`https://www.balldontlie.io/api/v1/players?search=${search}`)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    };

    fetchPlayer(search)
  }, [search])

  console.log(search)
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ boxShadow: "0 0 2rem rgba(0,0,0,0.1)", marginTop: "2rem", paddingTop: "1rem", paddingBottom: "2rem" }} >
          <Paper className={classes.paper}>
            <Typography variant="h4" component="h2">
              PLAYERS
           </Typography>
            {/* <SearchInput
              searchChange={onSearchChange}
              searchState={search}
              clearSearch={onSearchClearBtnClick}
            /> */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
};

export default PlayerPage;
