import React from 'react';
import { Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import Board from '../components/board';
import SideContainer from './SideContainer';
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
  const dispatch = useDispatch();

  // send a get request to the /info API to retrive all game saved from database 
  fetch("/api/info", {
    method: "GET",
    headers: {'Content-Type': 'application/json'},
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if (data[0].item){
      const game = JSON.parse(data[0].item)
      dispatch(getFetch(game))
    } 
    return
  })
  .catch(err => {
    console.log('an error occured trying to get info');
    throw err;
  })

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
        <Board className={classes.board}/>
      </div>
    </Container>
    </div>
  );
};

export default MainContainer; 
