import React from "react";
import { TeamCard } from "./index";

const TeamList = ({ teams }) => {
  return (
    <div className="team-list-grid">
      {teams.map(team => {
        return (
          <div key={team.id}>
            <TeamCard team={team} />
          </div>
        );
      })}
    </div>
  );
};

export default TeamList;
