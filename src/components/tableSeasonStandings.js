import React from 'react'
import { Loader } from "./index"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    boxShadow: "0 0 2rem rgba(0,0,0,0.1)"
  },
  table: {
    minWidth: 650,
  },
  tableHead: {
    color: "white",
    fontSize: 14,
    paddingTop: "2px",
    paddingBottom: "2px"
  },
  tableBodyRow: {
    "&:hover": {
      background: "#ddd",
      cursor: "auto"
    }
  },
  tableBodyRowCell: {
    fontSize: 12,
    paddingTop: "4px",
    paddingBottom: "4px"
  }
}));

const DivisionStandings = ({ data }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow style={{ backgroundColor: "black" }}>
            <TableCell className={classes.tableHead}>Team</TableCell>
            <TableCell className={classes.tableHead} align="right">GP</TableCell>
            <TableCell className={classes.tableHead} align="right">W</TableCell>
            <TableCell className={classes.tableHead} align="right">L</TableCell>
            <TableCell className={classes.tableHead} align="right">Conf. W/L</TableCell>
            <TableCell className={classes.tableHead} align="right">Divison W/L </TableCell>
            <TableCell className={classes.tableHead} align="right">Home W/L</TableCell>
            <TableCell className={classes.tableHead} align="right">Road W/L</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length !== 0 ? data.map(indTeam => {
            return (
              <TableRow className={classes.tableBodyRow} key={indTeam.id}>
                <TableCell className={classes.tableBodyRowCell} component="th" scope="row">{`${indTeam.name} ${indTeam.nickname}`}</TableCell>
                <TableCell className={classes.tableBodyRowCell} align="right">{Number(indTeam.team_stats.wins) + Number(indTeam.team_stats.losses)}</TableCell>
                <TableCell className={classes.tableBodyRowCell} align="right">{indTeam.team_stats.wins}</TableCell>
                <TableCell className={classes.tableBodyRowCell} align="right">{indTeam.team_stats.losses}</TableCell>
                <TableCell className={classes.tableBodyRowCell} align="right">{indTeam.team_stats.conf_win_loss}</TableCell>
                <TableCell className={classes.tableBodyRowCell} align="right">{indTeam.team_stats.div_win_loss}</TableCell>
                <TableCell className={classes.tableBodyRowCell} align="right">{indTeam.team_stats.home}</TableCell>
                <TableCell className={classes.tableBodyRowCell} align="right">{indTeam.team_stats.road}</TableCell>
              </TableRow>
            )
          }) : (
              <TableRow className={classes.tableBodyRow}>
                <TableCell style={{ minHeight: "200px",display: "flex", justifyContent: "center", alignItems: "center" }} className={classes.tableBodyRowCell} component="th" scope="row"><Loader /></TableCell>
              </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default DivisionStandings;