import React, { useState, useEffect } from "react";
import { fetchStandings, fetchLastEvents } from "../API";
import { DivisionStandings, LatestGamesTable } from "../components";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "black",
    boxShadow: "none"
  },
  container: {
    boxShadow: "0 0 2rem rgba(0,0,0,0.1)", 
    marginTop: "2rem", 
    paddingTop: "1rem", 
    paddingBottom: "2rem"
  },
  title: {
    margintop: "1rem", 
    marginBottom: "1rem"
  }
}));


const StandingsPage = () => {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [season, setSeason] = useState("2018");
  const [conference, setConference] = useState("");
  const [lastEvents, setLastEvents] = useState([]);

  const handleSeasonChange = e => {
    setSeason(e.target.value)
  }
  const handleConferenceChange = e => {
    setConference(e.target.value)
  }

  useEffect(() => {
    fetchStandings(season, setStandings, setLoading);
    fetchLastEvents(setLastEvents);
  }, [season])



  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <Paper className={classes.paper}>      
            <Grid container spacing={3} className={classes.container}>
              <Grid item xs={12}>
              <Typography variant="h3" component="h1" className={classes.title} >
                STANDINGS
            </Typography>
              <Typography variant="h6" component="h1" className={classes.title} >
                SEASON {season}
            </Typography>
              <div>
                <div style={{marginBottom: "0.5rem"}}>
                  <Typography variant="button"style={{marginRight: "1rem"}} >Select season</Typography>
                  <Select onChange={handleSeasonChange} value={season} native>
                    <option value={2018}>2018-2019</option>
                    <option value={2016}>2016-2017</option>
                    <option value={2015}>2015-2016</option>
                    <option value={2014}>2014-2015</option>
                    <option value={2013}>2013-2014</option>
                    <option value={2012}>2012-2013</option>
                    <option value={2011}>2011-2012</option>
                  </Select>
                </div>
                <div>
                  <Typography variant="button" style={{ marginRight: "1rem" }} >Select conference</Typography>
                  <Select onChange={handleConferenceChange} value={conference} native>
                    <option value={"All"}>ALL</option>
                    <option value={"east"}>EAST</option>
                    <option value={"west"}>WEST</option>
                  </Select>
                  </div>
                </div>
              </Grid>
              {conference === "west" ? "" : (
              <Grid item xs={12} lg={conference === "east" ? 12 : 6}  >
                <Typography variant="h6" component="h3">
                  EASTERN CONFERENCE
                </Typography>
                <DivisionStandings data={loading ? [] : standings.conferences.East.team} />
              </Grid>)}
              {conference === "east" ? ""
              : (
                  <Grid item xs={12} lg={conference === "west" ? 12 : 6}>
                <Typography variant="h6" component="h3">
                  WESTERN CONFERENCE
                </Typography>
                <DivisionStandings data={loading ? [] : standings.conferences.West.team} />
              </Grid>)}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5} md={4} lg={4} xl={3} >
          <Paper className={classes.paper}>
            <Grid container spacing={3} className={classes.container}>
              <Grid item xs={12}>
                <Typography variant="h4" component="h1" className={classes.title}>
                  LATEST GAMES
                </Typography>
                {lastEvents === [] ? "" : <LatestGamesTable games={lastEvents}/>}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7} md={8} lg={8}  xl={9}>
          <Paper className={classes.paper}>
            <Grid container spacing={3} className={classes.container}>
              <Grid item xs={12}>
                <Typography variant="h4" component="h1" className={classes.title} >
                  SEASON LEADERS
                </Typography>
                <div>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <Typography variant="button" style={{ marginRight: "1rem" }} >Select season</Typography>
                    <Select onChange={handleSeasonChange} value={season} native>
                      <option value={2018}>2018-2019</option>
                      <option value={2016}>2016-2017</option>
                      <option value={2015}>2015-2016</option>
                      <option value={2014}>2014-2015</option>
                      <option value={2013}>2013-2014</option>
                      <option value={2012}>2012-2013</option>
                      <option value={2011}>2011-2012</option>
                    </Select>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
};

export default StandingsPage;
