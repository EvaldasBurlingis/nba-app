import React from "react";
import { IconInstagram, IconTwitter, IconFacebook, IconWeb } from "./icons";
// UI IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    card: {
      width: "100%",
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

const AboutCard = ({ 
    teamLogo, 
    teamName, 
    stadium, 
    intFormedYear, 
    stadiumLoc, 
    stadiumCap, 
    teamDesc,
    fb,
    web,
    twitter,
    insta
}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    function handleExpandClick() {
      setExpanded(!expanded);
    }

    return (
        <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          avatar={
            <Avatar className={classes.badge}>
              <img src={teamLogo} alt="team badge"/>
            </Avatar>
          }
          title={<Typography variant="h4" color="black" component="h2">{teamName}</Typography>}/>
        <CardContent>
          <Typography variant="body2" color="#333" component="p" style={{textAlign: "left"}}>
            <strong>Year formed:</strong> {intFormedYear}<br/>
            <strong>Stadium:</strong> "{stadium}"<br/>
            <strong>Stadium location:</strong> {stadiumLoc}<br/>
            <strong>Stadium capacity:</strong> {stadiumCap} seats
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <IconButton aria-label="Team website">
        <a target="_blank" href={"https://" + web} rel="noopener noreferrer">
          <IconWeb />
        </a>
      </IconButton>
      <IconButton aria-label="Facebook link">
        <a target="_blank" href={"https://" + fb} rel="noopener noreferrer">
          <IconFacebook />
        </a>
      </IconButton>
      <IconButton aria-label="Twitter link">
        <a
          target="_blank"
          href={"https://" + twitter}
          rel="noopener noreferrer"
        >
          <IconTwitter />
        </a>
      </IconButton>
      <IconButton aria-label="Instagram link">
        <a target="_blank" href={"https://" + insta} rel="noopener noreferrer">
          <IconInstagram />
        </a>
      </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{teamDesc}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    )
}

export default AboutCard