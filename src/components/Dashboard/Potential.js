import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';

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


export default function Potential() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <h1 className={classes.text}>Potential</h1>
      <MoreVertOutlinedIcon className={classes.rightJustify} fontSize='large'/>
    </div>
  )
}