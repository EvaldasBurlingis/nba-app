import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography"

const LastLeagueGamesCard = ({
  date,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  homeId,
  awayId
}) => {
  const [homeLogo, setHomeLogo] = useState("");
  const [awayLogo, setAwayLogo] = useState("");

  const fetchLogos = async () => {
    const [logo1, logo2] = await Promise.all([
      axios.get(
        `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${homeId}`
      ),
      axios.get(
        `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${awayId}`
      )
    ]);
  };

  useEffect(() => {
    fetchLogos();
  }, []);

  return (
    <div style={{ margin: "0.5rem 0", backgroundColor: "white" }}>
      <div style={{}}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5rem 2rem", borderBottom: "1px solid #d4d4d4" }}>
          <img src="https://www.thesportsdb.com/images/media/team/badge/cfcn1w1503741986.png" alt="" style={{ height: "70px", width: "auto", marginRight: "1rem" }} />
          <Typography align="left" style={{ width: "100%", marginRight: "1rem" }}>
            {homeTeam}
          </Typography>
          <Typography variant="h4" component="p">
            {homeScore}
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5rem 2rem", borderBottom: "1px solid #d4d4d4" }}>
          <img src="https://www.thesportsdb.com/images/media/team/badge/cfcn1w1503741986.png" alt="" style={{ height: "70px", width: "auto", marginRight: "1rem" }} />
          <Typography align="left" style={{ width: "100%", marginRight: "1rem" }}>
            {awayTeam}
          </Typography>
          <Typography variant="h4" component="p">
            {awayScore}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LastLeagueGamesCard;
