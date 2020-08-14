import React from 'react';
import { Typography, AppBar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  logoBox: {
    display: 'flex',
    alignItems: 'center',
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
          <Typography variant="inherit" className={classes.subHeader}>
            GAME ON
          </Typography>
        </Box>
      </AppBar>
      </>
  );
};

export default NavBar; 
