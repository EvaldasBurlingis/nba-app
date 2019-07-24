import React from "react";
import { LastGames } from "./index";
// UI IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    padding: "0"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  }
}));

const ModalTeamTab = ({ team }) => {
  const classes = useStyles();
  const {
    idTeam,
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
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={12} md={8}>
                <Grid container style={{border: "1px solid grey"}}>
                  <Grid item xs={12} md={4}>
                    <img src={strTeamBadge} alt=""/>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Typography variant="h1" component="h2">
                      {strTeam}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <LastGames teamId={idTeam} teamLogo={strTeamBadge} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ModalTeamTab;
