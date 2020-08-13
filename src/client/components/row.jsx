import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from './box';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'inline',
  },
}));

export default function Row (props){
  const classes = useStyles();
  const boxes = [];
  for (let i = 0; i < 8; i++) {
    boxes.push(<Box 
      evenOdd={props.evenOdd}
      boxId={props.rowId + i} 
      className={classes.box} 
      onClick={props.onClick} 
      // gameBoard={props.gameBoard[props.rowId + i]}
      />)
  }

  return (
      <div>
        {boxes}
      </div>
  )
}