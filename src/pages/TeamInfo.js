import React, { useState, useEffect } from "react";
import { Loader, PlayerAvatar } from "../components";
import { fetchTeamPlayers } from "../API"
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

  const id = match.params.id;

  useEffect(() => {
    fetchTeamPlayers(id, setTeamPlayerList, setPlayerListLoading);
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
              <div className={classes.playerImageContainer} >{teamPlayerList.map(player => <PlayerAvatar key={player.idPlayer} cutout={player.strCutout} name={player.strPlayer} position={player.strPosition} />)}</div>}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TeamInfoPage;
