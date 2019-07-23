import React from "react";

const ModalTeamTab = ({ team }) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <h1>{team.strTeam}</h1>
    </div>
  );
};

export default ModalTeamTab;
