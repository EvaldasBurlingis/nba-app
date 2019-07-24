import React from "react";
// UI IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const ModalTeamTab = ({ team }) => {
  const classes = useStyles();
  const {
    strTeam,
    intFormedYear,
    strStadium,
    strStadiumThumb,
    strStadiumDescription,
    strStadiumLocation,
    strStadiumCapacity,
    strFacebook,
    strWebsite,
    strTwitter,
    strInstagram,
    strDescriptionEN,
    strYoutube,
    strTeamBadge,
    strTeamLogo,
    strTeamBanner,
    strTeamJersey
  } = team;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h1" component="h2" gutterBottom>
              {strTeam}
            </Typography>
            <Typography component="p" gutterBottom>
              {strDescriptionEN}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Paper className={classes.paper}>
            <img src={strTeamJersey} alt="" />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Paper className={classes.paper}>
            <img src={strTeamBadge} alt=""/>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>1</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>2</Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.paper}>
            <img src={strTeamBanner} alt=""/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ModalTeamTab;
