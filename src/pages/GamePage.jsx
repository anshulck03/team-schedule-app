import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { useParams } from 'react-router-dom'; // Import useParams hook
import jsonData from '../data.json';

const GamePage = () => {
  const { index } = useParams(); // Use useParams hook to access route parameters
  const gameIndex = parseInt(index); // Parse index to integer
  const game = jsonData.games[gameIndex];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Game Details
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Game {gameIndex + 1}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Date: {game.date}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Opponent: {game.opponent}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Location: {game.location}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Status: {game.status === 1 ? 'Not Started' : game.status === 2 ? 'In Progress' : 'Completed'}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default GamePage;
