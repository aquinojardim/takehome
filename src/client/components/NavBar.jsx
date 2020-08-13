import React from 'react';
import {NavLink} from 'react-router-dom';
import { Typography, AppBar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// generate object to hold our custom stylings
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // header of entire app spans across the top
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    padding: theme.spacing(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: "10%",
  },
  navContainer: {
    marginTop: theme.spacing(10),
  },
  feedContainer: {
    marginTop: theme.spacing(8),
    alignItems: 'center',
    width: '100%',
  },
  navButton: {
    color: 'white',
    marginRight: theme.spacing(1),
  },
  logoBox: {
    display: 'flex',
    alignItems: 'center',
  },
  header: {
    display: 'inline',
    width: "100%",
  },
  subHeader: {
    display: 'inline',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    fontSize: 15,
  },
}));

// holds our top header bar, as well as our side bar (drawer), will also hold our feed container
const NavBar = (props) => {
  const classes = useStyles();
  // functions as css-reset
  return (
    <>
      {/* AppBar, where the title of website is, stays on top*/}
      <AppBar position="fixed" className={classes.appBar}>
        <Box className={classes.logoBox}>
          {/* if logo add here*/}
          {/* <img src="../assets/logo.png" className={classes.logo}></img> */}
          <Typography variant="inherit" className={classes.subHeader}>
              Company
          </Typography>
        </Box>
        <div>
        <NavLink to='/' style={{ textDecoration: 'none' }}>
          <Button className={classes.navButton} variant="outlined" color="secondary">
            Sign Up
          </Button>
        </NavLink>
        <NavLink to='/' style={{ textDecoration: 'none' }}>
          <Button className={classes.navButton} variant="contained" color="secondary">
            Login
          </Button>
        </NavLink> 
        </div>
      </AppBar>
      </>
  );
};

export default NavBar; 
