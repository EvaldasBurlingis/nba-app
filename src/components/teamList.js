import React from "react";
import { TeamCard } from "./index";

const TeamList = ({ teams }) => {

  //check if teams array is empty
  if (teams.length !== 0) {
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
  } else {
    return (
      <div className="fw-center">
        <h1 className="display-1 text-center">
          Oh no...
          <br /> Team with that name does not exist
        </h1>
      </div>
    );
  }
};

export default TeamList;
