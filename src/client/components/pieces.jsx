import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as actions from '../actions/actions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  piece: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "inline-block",
    outlineColor: "yellow"
  },
}));

export default function pieces (props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  console.log(props.boxId)

  return (
    <button 
      id={`${props.boxId}piece`} 
      style={{background: props.color === 'suggestion'? 'rgba(61, 148, 225, 0.5)': props.color === true ?'#8b0000' : '#808080'}}
      className={classes.piece} 
      onClick={(e) => dispatch(actions.setCurrentPiece({
        id: props.boxId,
        color: props.color
      }))}
    ></button>
  )
}