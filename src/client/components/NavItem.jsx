import React from 'react';
import * as actions from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { teal } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  name: {
    position: 'absolute',
    left: '150px',
  },
  floatLeft: {
    position: 'absolute',
    left: '220px',
  },

}));

export default function NavItem({topic}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleOnClick = () => {
    if(topic === 'Save'){
      console.log('one save')
      fetch("/api/info", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ item: JSON.stringify(state) })
      })
      .then(res => res.json())
      .then(data => {
        return
      })
      .catch(err => {
        console.log('an error occured trying to post info');
        throw err;
      })
    } else if (topic === 'Reset'){
      dispatch(actions.reset(topic))
    }

  }

  return (
      <ListItem button onClick={(e) => handleOnClick()}>
        <h4 className={classes.name}>{topic}</h4>
        <ArrowForwardIosIcon className={classes.floatLeft} style={{ color: teal[500] }}/>
      </ListItem>
  );
}
