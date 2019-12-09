import React, { useState, useEffect } from "react";
import { fetchUpcomingEvents } from "../API";
import { Loader, LatestGamesTable } from "../components"
// UI COMPONENTS
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
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
  title: {
   margintop: "1rem", 
   marginBottom: "1rem"
  }
}));

const HomePage = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    fetchUpcomingEvents(setUpcomingEvents);
  }, []);

  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className={classes.container}>
          <Paper className={classes.paper}>
            <Typography variant="h4" component="h2">
              UPCOMING GAMES
            </Typography>
            {upcomingEvents !== null && upcomingEvents.length === 0 ? <Loader /> :
            upcomingEvents === null ?
              ( <Typography variant="h6" component="p" style={{marginTop: "2rem"}}>No games found</Typography>)
               :
            (<LatestGamesTable games={upcomingEvents}/>)}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
