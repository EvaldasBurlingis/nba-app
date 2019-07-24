import React, { useState, useEffect } from "react";
import { Loader } from "../components";
import axios from "axios";

const TeamInfoPage = ({ match }) => {
  const [team, setTeam] = useState({});
  const [contentLoading, setContentLoading] = useState(true);


  const fetchTeam = async () => {
        const data = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${match.params.id}`)
      .then(res => {
        setTeam(res.data.player);
        setContentLoading(false);
      })
      .catch(err => console.error(err));
  }


  useEffect(() => {
    fetchTeam();
  }, [])

  console.log(team)
  return (
    <div style={{display: "flex", flexWrap: "nowrap"}}>
      {contentLoading ? <div className="fw-center"><Loader/></div> :  team.map(player => (<img src={player.strCutout} style={{width: "200px", height: "auto"}}/>)) }
    </div>
  );
};

export default TeamInfoPage;