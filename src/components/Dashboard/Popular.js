import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  rightJustify: {
    marginLeft: 'auto',
  },
  text: {
    marginLeft: 10,
  }
}));


export default function Popular() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <SendOutlinedIcon fontSize='large'/>
      <h1 className={classes.text}>Popular Destinations & Packages</h1>
      <MoreVertOutlinedIcon className={classes.rightJustify} fontSize='large'/>
    </div>
  )
}