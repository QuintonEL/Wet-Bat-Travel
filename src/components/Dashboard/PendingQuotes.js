import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RestoreOutlinedIcon from '@material-ui/icons/RestoreOutlined';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';

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


export default function PendingQuotes() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <RestoreOutlinedIcon fontSize='large'/>
      <h1 className={classes.text}>Pending Quotes</h1>
      <RefreshOutlinedIcon className={classes.rightJustify} fontSize='large'/>
      <ZoomOutMapIcon fontSize='large'/>
    </div>
  )
}