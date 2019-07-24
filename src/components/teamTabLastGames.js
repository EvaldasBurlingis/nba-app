import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "./index";
// UI IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    card: {
      width: "100%",
      border: "0",
      boxShadow: "none",
      [theme.breakpoints.down("md")]: {
        padding: "0.5rem",
      }
    },
  }));


const LastGames = ({ teamId}) => {
    const classes = useStyles();
    const [teamLastGames, setLastGames] = useState();
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        axios
        .get(`https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${teamId}`)
        .then(res => {
            setLastGames(res.data.results);
            setLoading(false);
        })
        .catch(err =>  console.error(err));
           }, [teamId])

    console.log(teamLastGames)
    return (
         <Card className={classes.card}>
            <h2 style={{color: "black"}}>Last 5 games</h2>
    {loading ? <Loader loading={loading} />  : teamLastGames.map(game => {
        return (
            <ExpansionPanel key={game.idEvent}>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>{game.strHomeTeam} {game.intHomeScore} - {game.intAwayScore} {game.strAwayTeam}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }) }
        </Card>
    )
}

export default LastGames;