import React from "react";
import { TeamCard } from "./index";
// UI IMPORTS
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";


const HomeGrid = ({ teams }) => {
  if (teams.length === 0) {
    return <h1>No team with that name exists</h1>;
  } else {
    return (
      <Container style={{marginTop: "2rem"}} maxWidth="xl">
        <Grid container spacing={1} >
          {teams.map(team => (
            <Grid item xs={12} sm={12} md={6} lg={3} key={team.idTeam}>
              <TeamCard team={team} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
};

export default HomeGrid;
