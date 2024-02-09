import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const GameDetails = ({ game }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Game {game.nbaGameId} Details
        </Typography>
        <Typography color="textSecondary">
          Date: {game.date}, Time: {game.timeEst}
        </Typography>
        {/* Add more detailed game information here */}
      </CardContent>
    </Card>
  );
};

export default GameDetails;
