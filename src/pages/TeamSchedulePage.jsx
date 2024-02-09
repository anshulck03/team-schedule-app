import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import jsonData from '../data.json';


const TeamSchedulePage = () => {
  return (
    <>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Team Schedule
        </Typography>
      </Grid>
      {jsonData.games.map((game, index) => (
        <Grid item xs={12} key={index}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Game {index + 1}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Date: {game.date}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Opponent: {game.opponent}
            </Typography>
            <Link to={`/game/${index}`}>
              <Button variant="contained" color="primary">
                View Details
              </Button>
            </Link>
          </Paper>
        </Grid>
      ))}
    </Grid>
    
    </>
  );
};

export default TeamSchedulePage;
