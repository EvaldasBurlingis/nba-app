import React from "react";
import { Link } from "react-router-dom";
//  UI IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import { IconInstagram, IconTwitter, IconFacebook, IconWeb } from "./icons";

const useStyles = makeStyles({
  cardImage: {
    width: 250,
    height: 250,
    margin: "0 auto"
  }
});

const TeamCard = ({ team }) => {
  const classes = useStyles();


  // Content
  const {
    idTeam,
    strTeam: teamName,
    intFormedYear: yearFormed,
    strStadium: stadium,
    strStadiumLocation: stadiumLocation,
    intStadiumCapacity: stadiumCapacity,
    strWebsite,
    strFacebook,
    strTwitter,
    strInstagram,
  } = team;

  return (
    <Card className={classes.card}>
      <Link to={`team/${idTeam}`} style={{ textDecoration: "none", color: "inherit" }}>
        <CardActionArea style={{padding: "1rem"}}>
          <CardMedia
            component="img"
            alt={`${teamName} logo`}
            height="100"
            image={team.strTeamBadge}
            title={`${teamName} logo`}
            className={classes.cardImage}
          />
          <CardContent>
            <Box textAlign="center">
              <Typography gutterBottom variant="h6" component="h2">
                {teamName}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary" component="p">
                Year formed: {yearFormed}<br />
                Stadium: "{stadium}"<br />
                Stadium location: {stadiumLocation}<br />
                Stadium capacity: {stadiumCapacity} seats
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions disableSpacing>
        <IconButton aria-label="Team website">
          <a target="_blank" href={"https://" + strWebsite} rel="noopener noreferrer">
            <IconWeb />
          </a>
        </IconButton>
        <IconButton aria-label="Facebook link">
          <a target="_blank" href={"https://" + strFacebook} rel="noopener noreferrer">
            <IconFacebook />
          </a>
        </IconButton>
        <IconButton aria-label="Twitter link">
          <a
            target="_blank"
            href={"https://" + strTwitter}
            rel="noopener noreferrer"
          >
            <IconTwitter />
          </a>
        </IconButton>
        <IconButton aria-label="Instagram link">
          <a target="_blank" href={"https://" + strInstagram} rel="noopener noreferrer">
            <IconInstagram />
          </a>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TeamCard;
