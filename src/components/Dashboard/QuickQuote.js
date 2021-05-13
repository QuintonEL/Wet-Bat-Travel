import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FastForwardOutlinedIcon from '@material-ui/icons/FastForwardOutlined';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';

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


export default function QuickQuote() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <FastForwardOutlinedIcon fontSize='large'/>
      <h1 className={classes.text}>Quick Quote</h1>
      <ZoomOutMapIcon className={classes.rightJustify} fontSize='large'/>
    </div>
  )
}