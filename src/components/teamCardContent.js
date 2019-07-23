import React from 'react'
// UI IMPORTS
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';


const TeamCardContent = ({ teamName, yearFormed, stadium, stadiumLocation, stadiumCapacity }) => {
    return (
        <CardContent>
            <Box textAlign="center">
                <Typography gutterBottom variant="h6" component="h2">
                {teamName}
                </Typography>
            </Box>
            <Box>
                <Typography variant="body2" color="textSecondary" component="p">
                Year formed: {yearFormed}<br/>
                Stadium: "{stadium}"<br/>
                Stadium location: {stadiumLocation}<br/>
                Stadium capacity: {stadiumCapacity} seats
                </Typography>
            </Box>
        </CardContent>
    )
}

export default TeamCardContent

