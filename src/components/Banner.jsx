import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              <img src="mavericks_logo.png" alt="Mavericks Logo" style={{ height: '30px', marginRight: '10px' }} />
              Dallas Mavericks
            </Link>
          </Typography>
          <Button color="inherit" component={Link} to="/team-schedule">Team Schedule</Button>
          <Button color="inherit" component={Link} to="/game-status">Game Status</Button>
          <Button color="inherit" component={Link} to="/scouting-reports">Scouting Reports</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Banner;
