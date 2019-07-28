import React, { useState, useEffect } from "react";
import axios from "axios";
import { DivisionStandings } from "../components";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";


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


const StandingsPage = () => {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [season, setSeason] = useState("2018");
  const [conference, setConference] = useState("");

  const handleSeasonChange = e => {
    setSeason(e.target.value)
  }
  const handleConferenceChange = e => {
    setConference(e.target.value)
  }

  useEffect(() => {
    const fetchStandings = async (season) => {
      await axios
        .get(`https://cors-anywhere.herokuapp.com/http://data.nba.net/json/cms/${season}/standings/conference.json`)
        .then(data => {
          setStandings(data.data.sports_content.standings)
          setLoading(false);
        }
        )
        .catch(err => console.error(err));
    }
    fetchStandings(season);

  }, [season])





  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
            <Select onChange={handleSeasonChange} value={season} native>
              <option value={2018}>2018-2019</option>
              <option value={2016}>2016-2017</option>
              <option value={2015}>2015-2016</option>
              <option value={2014}>2014-2015</option>
              <option value={2013}>2013-2014</option>
              <option value={2012}>2012-2013</option>
              <option value={2011}>2011-2012</option>
            </Select>
            <Select onChange={handleConferenceChange} value={conference} native>
              <option value={"All"}>ALL</option>
              <option value={"east"}>EAST</option>
              <option value={"west"}>WEST</option>
            </Select>
            <p>{conference}</p>
            <Grid container spacing={3} style={{ boxShadow: "0 0 2rem rgba(0,0,0,0.1)", marginTop: "2rem" }}>
              {conference === "west" ? ""
               : (
              <Grid item xs={12} lg={conference === "east" ? 12 : 6}  >
                <Typography variant="h6" component="h2">
                  EASTERN CONFERENCE
                </Typography>
                <DivisionStandings data={loading ? [] : standings.conferences.East.team} />
              </Grid>)}
              {conference === "east" ? ""
              : (
                  <Grid item xs={12} lg={conference === "west" ? 12 : 6}>
                <Typography variant="h6" component="h2">
                  WESTERN CONFERENCE
                </Typography>
                <DivisionStandings data={loading ? [] : standings.conferences.West.team} />
              </Grid>)}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
};

export default StandingsPage;
