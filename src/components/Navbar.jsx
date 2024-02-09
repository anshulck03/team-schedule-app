import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem, SvgIcon } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const MenuIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </SvgIcon>
);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  navbarLinks: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            MFOE
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMobileMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.navbarLinks}>
            <Button color="inherit" component={Link} to="/">
              Team Schedule
            </Button>
            <Button color="inherit" component={Link} to="/TeamPage">
              Team Page
            </Button>
            <Button color="inherit" component={Link} to="/gamestatus">
              Game Status
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Menu
        id="mobile-menu"
        anchorEl={mobileMenuAnchorEl}
        keepMounted
        open={Boolean(mobileMenuAnchorEl)}
        onClose={handleMobileMenuClose}
      >
        <MenuItem onClick={handleMobileMenuClose} component={Link} to="/">
          Team Schedule
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose} component={Link} to="/TeamPage">
          Team Page
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose} component={Link} to="/gamestatus">
          Game Status
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose} component={Link} to="/PlayerStats">
          Player Stats
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
