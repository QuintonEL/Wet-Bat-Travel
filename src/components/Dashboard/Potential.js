import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import PieChart from './Charts/PieChart';

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


export default function Potential() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.header}>
        <PieChartOutlinedIcon fontSize='large' style={{fill: '#5bbfba'}}/>
        <h1 className={classes.text}>Potential Revenue</h1>
        <MoreVertOutlinedIcon className={classes.rightJustify} fontSize='large'/>
      </div>
      <div style={{display: 'flex'}}>
        <div>
          <PieChart />
        </div>
        <div>
          <PieChart />
        </div>
        <div>
          <PieChart />
        </div>
      </div>
    </div>
  )
}