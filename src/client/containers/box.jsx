import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box: {
    boxSizing: "border-box",
    width: "50px",
    height: "50px",
    border: "none",
    display: "inline-block",
  },
}));

export default function Box (props) {
  const classes = useStyles();
  const colors = (boxId, evenOdd) => {
    if(boxId%2 === 0 && evenOdd === true){
      return 'black'
    } else if (boxId%2 !== 0 && evenOdd === true){
      return 'white' 
    } else if (boxId%2 === 0 && evenOdd === false) {
      'white'
    } else {
      return 'black'
    }
  }


  return (
    <button 
      id={props.boxId} 
      style={{background:`${colors(props.boxId, props.evenOdd)}`}}
      className={classes.box} 
      // onClick={props.onClick}
    >{props.gameBoard}</button>
  )
}