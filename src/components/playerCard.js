import React, { useState } from "react";
import Swiper from "react-id-swiper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "scroll"
  },
  table: {
    minWidth: 100
  }
}));

const PlayerCard = ({ players }) => {
  const classes = useStyles();
  const [swiper, updateSwiper] = useState(null);
  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const params = {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    noSwiping: true
  };
  console.log(players);
  return (
    <div>
      <Swiper {...params} getSwiper={updateSwiper}>
        {players.map(player => {
          const full_name = player.name.split(" ");
          return (
            <div
              key={player.name + player.team_name}
              style={{
                height: "100%",
                width: "100%"
              }}
            >
              <img
                src={`https://nba-players.herokuapp.com/players/${
                  full_name[1]
                }/${full_name[0]}`}
                alt=""
              />
              <h1>{player.name}</h1>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>GP</TableCell>
                      <TableCell align="right">PPG</TableCell>
                      <TableCell align="right">RPG</TableCell>
                      <TableCell align="right">APG</TableCell>
                      <TableCell align="right">BPG</TableCell>
                      <TableCell align="right">FG%</TableCell>
                      <TableCell align="right">3P%</TableCell>
                      <TableCell align="right">FT%</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="right">{player.games_played}</TableCell>
                      <TableCell align="right">
                        {player.points_per_game}
                      </TableCell>
                      <TableCell align="right">
                        {player.points_per_game}
                      </TableCell>
                      <TableCell align="right">
                        {player.points_per_game}
                      </TableCell>
                      <TableCell align="right">
                        {player.points_per_game}
                      </TableCell>
                      <TableCell align="right">
                        {player.points_per_game}
                      </TableCell>
                      <TableCell align="right">
                        {player.points_per_game}
                      </TableCell>
                      <TableCell align="right">
                        {player.points_per_game}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
            </div>
          );
        })}
      </Swiper>
      <div className="player-card--buttons">
        <button className="buttons__select-button" onClick={goPrev}>
          Prev
        </button>
        <button className="button__select-button" onClick={goNext}>
          Next
        </button>
      </div>
    </div>
  );
};
export default PlayerCard;
