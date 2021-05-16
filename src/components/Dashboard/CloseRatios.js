import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import DoughnutChart from './Charts/Doughnut';

const useStyles = makeStyles((theme) => ({
  chart: {
    height: 220,
    width: 220,
    display: 'inline',
    padding: 10,
  },
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


export default function CloseRatios() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.header}>
        <CheckCircleOutlinedIcon fontSize='large' style={{fill: '#5bbfba'}}/>
        <h1 className={classes.text}>Close Ratios</h1>
        <MoreVertOutlinedIcon className={classes.rightJustify} fontSize='large'/>
      </div>
      <div className={classes.chart}>
        <DoughnutChart/>
      </div>
    </div>
  )
}