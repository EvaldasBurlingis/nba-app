import React, { useState, useEffect } from "react";
import { Loader, PlayerAvatar } from "../components";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
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

const TeamInfoPage = ({ match }) => {
  const [teamPlayerList, setTeamPlayerList] = useState({});
  const [playerListLoading, setPlayerListLoading] = useState(true);
  const [teamInfoLoading] = useState(true);


  // const fetchTeamPlayers = async () => {
  //   await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${match.params.id}`)
  //     .then(res => {
  //       setTeamPlayerList(res.data.player);
  //       setPlayerListLoading(false);
  //     })
  //     .catch(err => console.error(err));
  // }

  const id = match.params.id;


  useEffect(() => {
    const fetchTeamPlayers = async (id) => {
      await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${id}`)
        .then(res => {
          setTeamPlayerList(res.data.player);
          setPlayerListLoading(false);
        })
        .catch(err => console.error(err));
    }

    fetchTeamPlayers(id);
  }, [id])

  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} md={7} >
          <Paper className={classes.paper}>
            <h1>About Team</h1>
            {teamInfoLoading ? <div className="fw-center"><Loader /></div> : ""}
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper className={classes.paper}>
            <h1>Team</h1>
            {playerListLoading
              ? <div className="fw-center"><Loader /></div>
              :
              <div className={classes.playerImageContainer} >{teamPlayerList.map(player => <PlayerAvatar key={player} cutout={player.strCutout} name={player.strPlayer} position={player.strPosition} />)}</div>}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TeamInfoPage;