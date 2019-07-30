import React, {  useState, useEffect } from "react";
import { fetchPlayer } from "../API"
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "black",
    boxShadow: "none"
  }
}));


const PlayerPage = () => {
  const [search, setSearch] = useState("");
  const [playersList, setPlayersList] = useState([]);
  const [player, setPlayer] = useState(null);


  // TEAM SEARCH
  const onSearchChange = e => {
    setSearch(e.target.value);
  };
  

  // CLEAR SEARCH FIELD
  // If search field is not empty, add button to clear it
  // const onSearchClearBtnClick = e => {
  //   setSearch("");
  // };

  useEffect(() => {
    fetchPlayer(search, setPlayersList)
  }, [search])


  console.log(playersList)
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
            <Grid container spacing={3} style={{ boxShadow: "0 0 2rem rgba(0,0,0,0.1)", marginTop: "2rem", paddingTop: "1rem", paddingBottom: "2rem" }}>
              <Grid item xs={12}>
                <Typography variant="h3" component="h1" style={{ margintop: "1rem", marginBottom: "1rem" }} >
                  {player !== null ? player.first_name + " " + player.last_name : ""}
                </Typography>
                <input type="text" onChange={onSearchChange} placeholder="Search Players"/>
                {search === "" ? "" : 
                  playersList.length === 0 ? <p>Check players name</p>  :
                   playersList.map(players => <p key={players.id} onClick={() => setPlayer(players)}>{`${players.first_name} ${players.last_name}`}</p>)}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
};

export default PlayerPage;
