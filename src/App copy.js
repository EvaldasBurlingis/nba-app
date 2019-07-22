import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loader } from "./components";

const App = () => {
  const [teamList, setTeamList] = useState([]);
  const [contentLoading, setContentLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387"
      )
      .then(res => {
        setTeamList(res.data.teams);
        setContentLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  console.log(teamList);
  return (
    <div className="App">
      {contentLoading ? (
        <Loader loading={contentLoading} />
      ) : (
        <h1>{teamList[0].strTeam}</h1>
      )}
    </div>
  );
};

export default App;
