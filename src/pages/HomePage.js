import React, { useState, useEffect } from "react";
import { HomeGrid, Loader } from "../components";
import axios from "axios";

const HomePage = () => {
  const [teamList, setTeamList] = useState([]);
  const [contentLoading, setContentLoading] = useState(true);

  const fetchTeams = async () => {
    const data = await axios.get("https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387")
      .then(res => {
        setTeamList(res.data.teams);
        setContentLoading(false);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div>
      {contentLoading ? <div className="fw-center"><Loader/></div> : <HomeGrid teams={teamList} /> }
    </div>
  );
};

export default HomePage;
