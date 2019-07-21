import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "./index";
import { checkIfValidAbbreviation } from "./utils";

const TeamCard = ({ team }) => {
  //  STATE
  const [showTeam, setShowTeam] = useState(false);
  const [players, setPlayers] = useState([]);

  function handlePopup() {
    setShowTeam({ showTeam: !showTeam });
  }

  useEffect(() => {
    // Check for valid abbreviation
    let teamAbbreviation = checkIfValidAbbreviation(abbreviation);

    axios
      .get(
        `https://nba-players.herokuapp.com/players-stats-teams/${teamAbbreviation}`
      )
      .then(res => {
        setPlayers(res.data);
      })
      .catch(err => console.error(err));
  });

  const { abbreviation, full_name } = team;

  return (
    <div className="team-card" onClick={handlePopup}>
      {showTeam ? (
        <Modal handlePopup={handlePopup} team={team} players={players} />
      ) : (
        ""
      )}
      <img
        className="team-card__image"
        src={`http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/${abbreviation.toLowerCase()}.png`}
        alt=""
      />
      <div className="team-card__overlay">
        <h1 className="team-card__overlay-title">{full_name}</h1>
      </div>
    </div>
  );
};

export default TeamCard;
