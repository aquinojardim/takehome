import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Row from './row.jsx';

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'block',
  },
}));

export default function Board (props) {
  const classes = useStyles();  
  const rows = [];
  for (let i = 0; i < 64; i += 8) {
    console.log(i)
    rows.push(<Row 
      evenOdd={
        i === 0 || i === 16 || i === 32 || i === 48 ? true : false  
        }
      rowId={i} 
      className={classes.row} 
      // onClick={props.onClick} 
      // gameBoard={props.gameBoard}
      />)
    }
  return (
    <div>
      {rows}
    </div> 
  )
}