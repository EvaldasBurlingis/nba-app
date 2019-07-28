import React from 'react';
import { Loader } from "./index"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
        boxShadow: "0 0 2rem rgba(0,0,0,0.1)"
    },
    table: {
    },
    tableHead: {
        color: "white",
        fontSize: 12,
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

const LatestGamesTable = ({ games }) => {
    const classes = useStyles();
    return(
        <div>
            {games.length !== 0 ? (
                games.map(game => (
                    <Table key={game.idEvent} className={classes.table}>
                        <TableHead>
                            <TableRow style={{ backgroundColor: "black" }}>
                                <TableCell className={classes.tableHead}>{game.dateEvent}</TableCell>
                                <TableCell className={classes.tableHead}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        <TableRow className={classes.tableBodyRow}>
                            <TableCell className={classes.tableBodyRowCell} component="th" scope="row">{game.strHomeTeam}</TableCell>
                            <TableCell className={classes.tableBodyRowCell} align="right">{game.intHomeScore}</TableCell>
                        </TableRow>
                        <TableRow className={classes.tableBodyRow}>
                            <TableCell className={classes.tableBodyRowCell} component="th" scope="row">{game.strAwayTeam}</TableCell>
                            <TableCell className={classes.tableBodyRowCell} align="right">{game.intAwayScore}</TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                ))
            ) : (
                <Loader/>
            )}
       </div>     
    )
}

export default LatestGamesTable