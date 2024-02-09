import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    borderRadius: theme.spacing(2), // Increased border radius for a more rounded look
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: theme.shadows[6],
    },
  },
  teamLogo: {
    width: theme.spacing(10), // Adjusted size for team logos
    height: theme.spacing(10),
  },
  gameInfo: {
    paddingLeft: theme.spacing(2), // Added padding to separate game info from team logos
  },
}));

const GameCard = ({ game }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={6} sm={8} md={8} lg={8} className={classes.gameInfo}> {/* Grid for game info */}
            <Typography variant="h5" component="h2">
              Game {game.nbaGameId}
            </Typography>
            <Typography color="textSecondary">
              Date: {game.date}, Time: {game.timeEst}
            </Typography>
            <Typography color="textSecondary">
              {game.homeTeam} vs {game.awayTeam}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={4} display="flex" justifyContent="flex-end"> {/* Grid for team logos */}
            <Avatar className={classes.teamLogo} src={getTeamLogo(game.homeTeam)} alt={game.homeTeam} />
            <Avatar className={classes.teamLogo} src={getTeamLogo(game.awayTeam)} alt={game.awayTeam} />
          </Grid>
        </Grid>
        {/* Additional game details can be displayed here */}
      </CardContent>
    </Card>
  );
};

const getTeamLogo = (teamAbbreviation) => {
  // Logic to retrieve team logo based on team abbreviation
  // You can replace this with your own logic to fetch team logos
  return `https://example.com/logos/${teamAbbreviation}.png`;
};

export default GameCard;
