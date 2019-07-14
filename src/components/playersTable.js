import React from "react";

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
            <tr key={player.name}>
              <td className="modal-table__image">
                <img
                  src={`https://nba-players.herokuapp.com/players/${
                    full_name[1]
                  }/${full_name[0]}`}
                  alt=""
                />
              </td>
              <td style={{ fontWeight: "700" }}>{player.name}</td>
              <td>{player.games_played}</td>
              <td>{player.points_per_game}</td>
              <td>{player.rebounds_per_game}</td>
              <td>{player.assists_per_game}</td>
              <td>{player.blocks_per_game}</td>
              <td>{player.field_goal_percentage}</td>
              <td>{player.three_point_percentage}</td>
              <td>{player.free_throw_percentage}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PlayersTable;
