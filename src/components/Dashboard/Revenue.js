import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import BarChartIcon from '@material-ui/icons/BarChart';
import LineChart from './Charts/LineChart';
import { Height } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderBottomStyle: 'solid',
  },
  rightJustify: {
    marginLeft: 'auto',
  },
  text: {
    marginLeft: 10,
  }
}));


export default function Revenue() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.header}>
        <BarChartIcon fontSize='large' style={{fill: '#5bbfba'}}/>
        <h1 className={classes.text}>Revenue</h1>
        <MoreVertOutlinedIcon className={classes.rightJustify} fontSize='large' />
      </div>
      <div>
        <LineChart/>
      </div>
    </div>
  )
}