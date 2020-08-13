import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Pieces from './pieces';

const useStyles = makeStyles((theme) => ({
  box: {
    width: "50px",
    height: "50px",
    border: "none",
    display: "inline-block",
  },
}));

export default function Box (props) {
  const classes = useStyles();
  const { suggestedMove } = useSelector((state) => state);
  const colors = (boxId, evenOdd) => {
    if(boxId%2 === 0 && evenOdd === true){
      return 'black'
    } else if (boxId%2 !== 0 && evenOdd === true){
      return 'white' 
    } else if (boxId%2 === 0 && evenOdd === false) {
      return 'white'
    } else {
      return 'black'
    }
  }

  const displayPiece = (boxId) => {
    if(boxId < 16){
      return <Pieces color={true} boxId={props.boxId}/>
    } else if (boxId > 47){
      return <Pieces color={false} boxId={props.boxId}/>
    } else if (suggestedMove.includes(props.boxId)){
      return <Pieces color={'suggestion'} boxId={props.boxId}/>
    } else {
      return ''
    }
  }


  return (
    <div 
      id={props.boxId} 
      style={{background:`${colors(props.boxId, props.evenOdd)}`}}
      className={classes.box} 
      // onClick={props.onClick}
    >
    {/* {props.gameBoard}  */}
    {displayPiece(props.boxId)}
    </div>
  )
}