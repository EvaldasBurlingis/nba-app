import React, { useState, useEffect } from "react";
import axios from "axios";
import { DivisionStandings } from "../components";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "black",
    border: "1px solid black",
    boxShadow: "none"
  }
}));


const StandingsPage = () => {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [season, setSeason] = useState("2018")

  const handleChange = e => {
    setSeason(e.target.value)
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
            <Select onChange={handleChange} value={season} native>
              <option value={2018}>2018-2019</option>
              <option value={2016}>2016-2017</option>
              <option value={2015}>2015-2016</option>
              <option value={2014}>2014-2015</option>
            </Select>
            <p>{season}</p>
            <Grid container spacing={6}>
              <Grid item xs={12} lg={6}>
                <h1>EAST</h1>
                <DivisionStandings data={loading ? [] : standings.conferences.East.team} />
              </Grid>
              <Grid item xs={12} lg={6} >
                <h1>WEST</h1>
                <DivisionStandings data={loading ? [] : standings.conferences.West.team} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
};

export default StandingsPage;
