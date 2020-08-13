import React from 'react';
import { Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Board from './board.jsx';

// generate object to hold our custom stylings
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  board: {
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
      <Board className={classes.board}/>
    </Container>
    </div>
  );
};

export default MainContainer; 
