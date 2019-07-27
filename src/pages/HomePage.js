import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loader, LastLeagueGamesCard, UpcomingLeagueEvents } from "../components";
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
    background: "#ddd",
  },
  playerImageContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(200px, 1fr))",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)"
    }
  }
}));

const HomePage = () => {
  const [lastEvents, setLastEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [upcomingEventsLoading, setUpcomingEventsLoading] = useState(true);

  const fetchLastEvents = async () => {
    await axios
      .get(
        `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4387`
      )
      .then(res => {
        setLastEvents(res.data.events);
        setEventsLoading(false);
      })
      .catch(err => console.error(err));
  };

  const fetchUpcomingEvents = async () => {
    await axios
      .get(
        `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4387`
      )
      .then(res => {
        setUpcomingEvents(res.data.events);
        setUpcomingEventsLoading(false);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchLastEvents();
    fetchUpcomingEvents();
  }, []);

  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3} >
          <Paper className={classes.paper}>
            <Typography variant="h4" component="h2">
              Upcoming Games
           </Typography>
            {upcomingEventsLoading ? (
              <div className="fw-center">
                <Loader />
              </div>
            ) : upcomingEvents === null ? <h1>No Games</h1> : upcomingEvents.map(event => <UpcomingLeagueEvents />)}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3} >
          <Paper className={classes.paper}>
            <Typography variant="h4" component="h2">
              Last Games
           </Typography>
            {eventsLoading ? (
              <div className="fw-center">
                <Loader />
              </div>
            ) : (
                lastEvents.map(game => {
                  const {
                    dateEvent,
                    strHomeTeam,
                    strAwayTeam,
                    intHomeScore,
                    intAwayScore,
                    idHomeTeam,
                    idAwayTeam
                  } = game;
                  return (
                    <LastLeagueGamesCard
                      key={"4581" + dateEvent + intHomeScore}
                      date={dateEvent}
                      homeTeam={strHomeTeam}
                      awayTeam={strAwayTeam}
                      homeScore={intHomeScore}
                      awayScore={intAwayScore}
                      homeId={idHomeTeam}
                      awayId={idAwayTeam}
                    />
                  );
                })
              )}
          </Paper>
        </Grid>

      </Grid>
    </Container>
  );
};

export default HomePage;
