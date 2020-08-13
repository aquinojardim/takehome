import React from 'react';
import { Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SideContainer from './SideContainer';
import FeedContainer from './FeedContainer';
import NavBar from '../components/NavBar';

// generate object to hold our custom stylings
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  feedContainer: {
    marginTop: theme.spacing(8),
    alignItems: 'center',
    width: '100%',
  }
}));

// holds our top header bar, as well as our side bar (drawer), will also hold our feed container
const MainContainer = (props) => {
  const classes = useStyles();

  // functions as css-reset
  return (
    <div>
    <Container maxWidth="lg" className={classes.root}>
      <div>
      <NavBar/>
      </div>  
      <div>
        <SideContainer/>
      </div>
      <div className={classes.feedContainer}>
        <FeedContainer title='Gabriela - Take Home'/>
      </div>
    </Container>
    </div>
  );
};

export default MainContainer; 
