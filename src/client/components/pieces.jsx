import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  piece: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "inline-block",
  },
}));

export default function pieces (props) {
  const classes = useStyles();
  return (
    <button 
      id={props.boxId} 
      style={{background: props.color? '#8b0000' : '#808080'}}
      className={classes.piece} 
      // onClick={props.onClick}
    >{props.gameBoard} </button>
  )
}