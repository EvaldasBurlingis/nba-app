import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, TeamCardFooter } from "./index";
import { checkIfValidAbbreviation } from "./utils";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    padding: "1rem"
  },
  cardImage: {
    width: 250,
    height: 250,
    margin: "0 auto"
  }
});

const TeamCard = ({ team }) => {
  //  STATE
  const [showTeam, setShowTeam] = useState(false);
  const [players, setPlayers] = useState([]);

  // function handlePopup() {
  //   setShowTeam({ showTeam: !showTeam });
  // }

  // useEffect(() => {
  //   // Check for valid abbreviation
  //   let teamAbbreviation = checkIfValidAbbreviation(team.abbreviation);
  //   axios
  //     .get(
  //       `https://nba-players.herokuapp.com/players-stats-teams/${teamAbbreviation}`
  //     )
  //     .then(res => {
  //       setPlayers(res.data);
  //     })
  //     .catch(err => console.error(err));
  // });

  // const { abbreviation, full_name } = team;
  const classes = useStyles();
  //onClick={handlePopup}

  const { strWebsite, strFacebook, strTwitter, strInstagram } = team;
  return (
    <div className="team-card">
      {/*showTeam ? (
        <Modal handlePopup={handlePopup} team={team} players={players} />
      ) : (
        ""
      )*/}
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={`${team.strTeam} logo`}
            height="100"
            image={`http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/${team.strTeamShort.toLowerCase()}.png`}
            title={`${team.strTeam} logo`}
            className={classes.cardImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {`${team.strTeam}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              about team
            </Typography>
          </CardContent>
        </CardActionArea>
        <TeamCardFooter
          fb={strFacebook}
          ig={strInstagram}
          twitter={strTwitter}
          web={strWebsite}
        />
      </Card>
    </div>
  );
};

export default TeamCard;
