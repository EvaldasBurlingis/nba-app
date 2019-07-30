import React, {/* useState, useEffect */} from "react";
// import axios from "axios";
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
  // const [search, setSearch] = useState("");
  // const [player, setPlayer] = useState([]);


  // // TEAM SEARCH
  // const onSearchChange = e => {
  //   setSearch(e.target.value);
  // };
  

  // // CLEAR SEARCH FIELD
  // // If search field is not empty, add button to clear it
  // const onSearchClearBtnClick = e => {
  //   setSearch("");
  // };

  // useEffect(() => {
  //   const fetchPlayer = async (search) => {
  //     await axios
  //       .get(`https://www.balldontlie.io/api/v1/players?search=${search}`)
  //       .then(res => setPlayer(res.data))
  //       .catch(err => console.error(err))
  //   };

  //   fetchPlayer(search)
  // }, [search])



  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
            <Grid container spacing={3} style={{ boxShadow: "0 0 2rem rgba(0,0,0,0.1)", marginTop: "2rem", paddingTop: "1rem", paddingBottom: "2rem" }}>
              <Grid item xs={12}>
                <Typography variant="h3" component="h1" style={{ margintop: "1rem", marginBottom: "1rem" }} >
                  PLAYERS
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
};

export default PlayerPage;
