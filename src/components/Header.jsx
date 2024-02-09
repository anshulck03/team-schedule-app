import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'fixed',
    top: '64px', // Adjust this value according to the height of your navbar
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: theme.spacing(2),
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    zIndex: theme.zIndex.appBar + 1,
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Mavericks front office executives.</h1>
    </div>
  );
};

export default Header;
