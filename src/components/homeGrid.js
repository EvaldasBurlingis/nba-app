import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { TeamCard } from "./index";

const HomeGrid = ({ teams }) => {
  if (teams.length === 0) {
    return <h1>No team with that name exists</h1>;
  } else {
    return (
      <Container maxWidth="xl">
        <Grid container spacing={1}>
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
