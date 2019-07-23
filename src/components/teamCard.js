import React from "react";
import { TeamCardFooter, TeamCardContent } from "./index";
//  UI IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";


const useStyles = makeStyles({
  card: {
    padding: "1rem"
  },
  cardImage: {
    width: 250,
    height: 250,
    margin: "0 auto"
  },

});

const TeamCard = ({ team }) => {
  const classes = useStyles();
  // Social Links
  const { strWebsite, strFacebook, strTwitter, strInstagram, strYoutube } = team;
  // Content
  const { 
    strTeam: teamName, 
    intFormedYear: yearFormed, 
    strStadium: stadium,
    strStadiumLocation: stadiumLocation,
    intStadiumCapacity: stadiumCapacity,
  } = team;


  return (
    <div className="team-card">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={`${teamName} logo`}
            height="100"
            image={team.strTeamBadge}
            title={`${teamName} logo`}
            className={classes.cardImage}
          />
          <TeamCardContent 
            teamName={teamName} 
            yearFormed={yearFormed} 
            stadium={stadium}
            stadiumLocation={stadiumLocation}
            stadiumCapacity={stadiumCapacity}
            />
        </CardActionArea>
        <TeamCardFooter
          fb={strFacebook}
          ig={strInstagram}
          twitter={strTwitter}
          web={strWebsite}
          youtube={strYoutube}
        />
      </Card>
    </div>
  );
};

export default TeamCard;
