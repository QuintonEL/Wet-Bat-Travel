import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Welcome from './Welcome';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* first row */}
        <Grid item xs={12}>
          <Paper className={classes.paper}><Welcome /></Paper>
        </Grid>
        {/* second row */}
        <Grid item xs>
          <Paper className={classes.paper}>Quick quote</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Pending quotes</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>New leads</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {/* third row */}
        <Grid item xs>
          <Paper className={classes.paper}>Popular destinations & packages</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Team chat</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {/* fourth row */}
        <Grid item xs>
          <Paper className={classes.paper}>Revenue</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Potential revenue</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Close ratios</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
