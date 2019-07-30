import React from "react";
import { TeamCard } from "./index";
// UI IMPORTS
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"


const TeamsGrid = ({ teams }) => {
  if (teams.length === 0) {
    return <Typography variant="h5" component="p"  align="center">No team with that name exists</Typography>;
  } else {
    return (
      <Container style={{marginTop: "2rem"}} maxWidth="xl">
        <Grid container spacing={3} >
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

export default TeamsGrid;
