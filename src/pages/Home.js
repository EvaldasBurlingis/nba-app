import React from "react";
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
  }
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
            <Grid container spacing={3} className={classes.container}>
              <Grid item xs={12}>
                <Typography variant="h3" component="h1" style={{ margintop: "1rem", marginBottom: "1rem" }} >
                  HOME
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
