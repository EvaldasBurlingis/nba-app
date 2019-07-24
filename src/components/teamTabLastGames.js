import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "./index";
import { makeStyles } from "@material-ui/core/styles";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const LastGames = ({ teamId}) => {
    const [teamLastGames, setLastGames] = useState();
    const [loading, setLoading] = useState(true);

    const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
          backgroundColor: theme.palette.background.paper,
        },
        gridList: {
          flexWrap: 'nowrap',
          // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
          transform: 'translateZ(0)',
        },
        title: {
          color: theme.palette.primary.light,
        },
        titleBar: {
          background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
      }));

      

    function getLastGames(id) {
        axios
        .get(`https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${id}`)
        .then(res => {
            setLastGames(res.data.results);
            setLoading(false);
        })
        .catch(err =>  console.error(err));
    }

    useEffect(() => {
        getLastGames(teamId);
    }, [])

    const classes = useStyles();

    return (
         <div>
            <h1>Last 5 games</h1>
            {loading ?
            <Loader loading={loading} /> 
            : 
            (<div className={classes.root}>
                <GridList className={classes.gridList} cols={2.5}>
                    {teamLastGames.map(game => {
                        return (
                            <GridListTile key={game.idEvent}>
                                <img src="https://source.unsplash.com/random/400x400" alt=""/>
                            </GridListTile>
                        )
                    }
                    )}
                </GridList>
            </div>)}
        </div>
    )
}

export default LastGames;