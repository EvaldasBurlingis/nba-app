import React, { useState, useEffect}  from "react";
import axios from "axios";
import {  Loader, LastLeagueGamesCard } from "../components";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  playerImageContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(200px, 1fr))",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)"
    },
  }
}));

const HomePage = () => {
  const [lastEvents, setLastEvents] = useState([]);
  const [eventsLoading, setEventsLoading] = useState(true);


  const fetchLastEvents = async () => {
    const data = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4387`)
      .then(res => {
        setLastEvents(res.data.events);
        setEventsLoading(false);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchLastEvents();
  }, [])

  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} >
          <Paper className={classes.paper}>
            <h1>Last Games</h1>
            <div style={{ width: "100%", margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
              <h1>HOME TEAM</h1>
              <h1>AWAY TEAM</h1>
            </div>
            {eventsLoading ?
               <div className="fw-center"><Loader /></div> 
               : 
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
                    date={dateEvent}
                    homeTeam={strHomeTeam}
                    awayTeam={strAwayTeam}
                    homeScore={intHomeScore}
                    awayScore={intAwayScore}
                    homeId={idHomeTeam}
                    awayId={idAwayTeam}
                    />
                )})}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
