import React from "react";
import { LastGames, AboutCard } from "./index";
// UI IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    padding: "2rem",
    boxShadow: "0 0 3rem rgba(0,0,0,0.4)",
    backgroundImage: "linear-gradient(to right, #434343 0%, black 100%)",
    [theme.breakpoints.down("md")]: {
      padding: "0.5rem",
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      padding: "0rem",
    }
  },
  header: {
    color: "black",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem"
    }
  },
  card: {
    border: "0",
    boxShadow: "none",
    [theme.breakpoints.down("md")]: {
      padding: "0.5rem",
    }
  },
  cardHeader: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    }
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  badge: {
    width: "150px",
    height: "auto",
    backgroundColor: "transparent"
  },

}));

const ModalTeamTab = ({ team }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }
  const {
    idTeam,
    strTeam,
    intFormedYear,
    strStadium,
    strStadiumThumb,
    strStadiumDescription,
    strStadiumLocation,
    intStadiumCapacity,
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
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <AboutCard 
                teamLogo={strTeamBadge} 
                teamName={strTeam}
                intFormedYear={intFormedYear}
                stadium={strStadium}
                stadiumLoc={strStadiumLocation}
                stadiumCap={intStadiumCapacity}
                teamDesc={strDescriptionEN}
                fb={strFacebook}
                web={strWebsite}
                twitter={strTwitter}
                insta={strInstagram}
                />
            </Paper>
          </Grid>
        </Grid>
    </div>
  );
};

export default ModalTeamTab;
