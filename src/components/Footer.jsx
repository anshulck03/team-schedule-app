import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import GitHubIcon from '@mui/icons-material/GitHub';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#333',
    color: '#fff',
    padding: theme.spacing(2),
    textAlign: 'center',
    width: '100%',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.footer}>
      <Toolbar>
        <Typography variant="body1" component="div">
          © {new Date().getFullYear()} Mavericks front office executives. All rights reserved.
        </Typography>
        <IconButton color="inherit" aria-label="GitHub" href="https://github.com/yourgithubrepository">
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

