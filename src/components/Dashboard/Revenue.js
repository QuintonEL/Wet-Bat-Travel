import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import BarChartIcon from '@material-ui/icons/BarChart';

// import our linechart for body
import LineChart from './Charts/LineChart';

const useStyles = makeStyles((theme) => ({
  chart: {
    height: 300,
    width: 300,
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


export default function Revenue() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.header}>
        {/* the card header */}
        <BarChartIcon fontSize='large' style={{fill: '#5bbfba'}}/>
        <h1 className={classes.text}>Revenue</h1>
        <MoreVertOutlinedIcon className={classes.rightJustify} fontSize='large' />
      </div>

      <div className={classes.chart}>
        {/* place the linechart in the body */}
        <LineChart />
      </div>
    </div>
  )
}