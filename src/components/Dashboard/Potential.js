import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';

// import piechart for the body
import PieChart from './Charts/PieChart';

const useStyles = makeStyles((theme) => ({
  chart: {
    height: 260,
    width: 260,
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


export default function Potential() {
  const classes = useStyles();

  return (
    <div>
      {/* card header */}
      <div className={classes.header}>
        <PieChartOutlinedIcon fontSize='large' style={{fill: '#5bbfba'}}/>
        <h1 className={classes.text}>Potential Revenue</h1>
        <MoreVertOutlinedIcon className={classes.rightJustify} fontSize='large'/>
      </div>

      <div style={{display: 'flex'}}>
        {/* insert three pie charts into body side by side */}
        <div className={classes.chart}>
          <PieChart />
        </div>
        <div className={classes.chart}>
          <PieChart />
        </div>
        <div className={classes.chart}>
          <PieChart />
        </div>
      </div>
    </div>
  )
}