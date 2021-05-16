import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Welcome from './Welcome';
import QuickQuote from './QuickQuote';
import PendingQuotes from './PendingQuotes';
import NewLeads from './NewLeads';
import Popular from './Popular';
import TeamChat from './TeamChat';
import Revenue from './Revenue';
import Potential from './Potential';
import CloseRatios from './CloseRatios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* first row */}
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{padding: 0}}><Welcome /></Paper>
        </Grid>
        {/* second row */}
        <Grid item xs>
          <Paper className={classes.paper}><QuickQuote /></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><PendingQuotes /></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><NewLeads /></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {/* third row */}
        <Grid item xs>
          <Paper className={classes.paper}><Popular /></Paper>
        </Grid>
        <Grid item xs style={{maxWidth: '30%'}}>
          <Paper className={classes.paper}><TeamChat /></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {/* fourth row */}
        <Grid item xs >
          <Paper className={classes.paper}><Revenue /></Paper>
        </Grid>
        <Grid item xs >
          <Paper className={classes.paper}><Potential /></Paper>
        </Grid>
        <Grid item xs >
          <Paper className={classes.paper}><CloseRatios /></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
