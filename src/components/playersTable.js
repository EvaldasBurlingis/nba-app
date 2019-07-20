import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 18
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
}));

const PlayersTable = ({ data }) => {
  const [hasImage, setHasImage] = useState([{ hasImage: false }]);

  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table>
        <TableHead className={classes.head}>
          <TableRow>
            <StyledTableCell align="right" />
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">GP</StyledTableCell>
            <StyledTableCell align="right">PPG</StyledTableCell>
            <StyledTableCell align="right">RPG</StyledTableCell>
            <StyledTableCell align="right">APG</StyledTableCell>
            <StyledTableCell align="right">BPG</StyledTableCell>
            <StyledTableCell align="right">FG%</StyledTableCell>
            <StyledTableCell align="right">3P%</StyledTableCell>
            <StyledTableCell align="right">FT%</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(player => {
            const full_name = player.name.split(" ");
            return (
              <TableRow key={player.name + player.games_played}>
                <TableCell align="right" style={{ padding: 0 }}>
                  {" "}
                  <img
                    style={{ height: "auto", width: "200px", marginRight: 0 }}
                    src={`https://nba-players.herokuapp.com/players/${
                      full_name[1]
                    }/${full_name[0]}`}
                    alt=""
                  />
                </TableCell>
                <TableCell align="right">{player.name}</TableCell>
                <TableCell align="right">{player.games_played}</TableCell>
                <TableCell align="right">{player.points_per_game}</TableCell>
                <TableCell align="right">{player.points_per_game}</TableCell>
                <TableCell align="right">{player.points_per_game}</TableCell>
                <TableCell align="right">{player.points_per_game}</TableCell>
                <TableCell align="right">{player.points_per_game}</TableCell>
                <TableCell align="right">{player.points_per_game}</TableCell>
                <TableCell align="right">{player.points_per_game}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default PlayersTable;
