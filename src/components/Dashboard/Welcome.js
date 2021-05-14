import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clipart from '../../clipart.png';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundImage: 'linear-gradient(to right, #5bbfba , #5f6caf)',

  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numbers: {
    fontFamily: 'system-ui',
    fontSize: 60,
    display: 'contents',
    color: '#f0cf85',
  }
}));

export default function Welcome() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <h1 style={{color: 'white', textAlign: 'left', fontSize: 40, paddingLeft: '1em'}}>Welcome to your dashboard</h1>
        <p style={{color: 'white', textAlign: 'left', fontSize: 18, paddingLeft: '2em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <img src={clipart} alt='clipart' style={{height: 500, top: 50, right: '20%', position: 'absolute'}}/>
      <div className={classes.column}>
        <div className={classes.footer}>
          <b className={classes.numbers}>101</b>
          <h2>NEW<br/>LEADS</h2>
        </div>
      </div>
      <div className={classes.column}>
        <div className={classes.footer}>
          <b className={classes.numbers}>35</b>
          <h2>QUOTES<br/>CREATED</h2>
        </div>
      </div>
      <div className={classes.column}>
        <div className={classes.footer}>
          <b className={classes.numbers}>40</b>
          <h2>PENDING<br/>ORDERS</h2>
        </div>
      </div>
    </div>
  )
}
