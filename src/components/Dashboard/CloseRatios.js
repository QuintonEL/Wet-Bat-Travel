import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: 1,
    borderBottomColor: 'grey',
    borderBottomStyle: 'solid',
  },
  rightJustify: {
    marginLeft: 'auto',
  },
  text: {
    marginLeft: 10,
  }
}));


export default function CloseRatios() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <CheckCircleOutlinedIcon fontSize='large' style={{fill: '#5bbfba'}}/>
      <h1 className={classes.text}>Close Ratios</h1>
      <MoreVertOutlinedIcon className={classes.rightJustify} fontSize='large'/>
    </div>
  )
}