import React from "react";
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

const PlayersTable = ({ data }) => {
  return (
    <table className="modal-table">
      <thead className="modal-table__header">
        <tr>
          <th />
          <th>Name</th>
          <th>GP</th>
          <th>PPG</th>
          <th>RPG</th>
          <th>APG</th>
          <th>BPG</th>
          <th>FG%</th>
          <th>3P%</th>
          <th>FT%</th>
        </tr>
      </thead>
      <tbody className="modal-table__body">
        {data.map(player => {
          const full_name = player.name.split(" ");
          return (
            <tr key={player.name} className="table-row">
              <td className="modal-table__image">
                <img
                  src={`https://nba-players.herokuapp.com/players/${
                    full_name[1]
                  }/${full_name[0]}`}
                  alt=""
                />
              </td>
              <td style={{ fontWeight: "700" }}>{player.name}</td>
              <td className="info-field">{player.games_played}</td>
              <td className="info-field">{player.points_per_game}</td>
              <td className="info-field">{player.rebounds_per_game}</td>
              <td className="info-field">{player.assists_per_game}</td>
              <td className="info-field">{player.blocks_per_game}</td>
              <td className="info-field">{player.field_goal_percentage}</td>
              <td className="info-field">{player.three_point_percentage}</td>
              <td className="info-field">{player.free_throw_percentage}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PlayersTable;
