import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

import MapChart from "./Charts/MapChart";


const useStyles = makeStyles((theme) => ({
  colorStrip: {
    width: 100,
    height: 10,
    backgroundColor: 'blue',
    borderRadius: 22,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderBottomStyle: 'solid',
  },
  leftAlign: {
    display: 'flex',
    // borderRight: 1,
    // borderRightColor: 'rgba(0, 0, 0, 0.12)',
    // borderRightStyle: 'solid',
  },
  rightJustify: {
    marginLeft: 'auto',
  },
  rightAlign: {
    display: 'flex',
  },
  text: {
    marginLeft: 10,
  }
}));

function generate(element) {
  return [0, 1, 2, 3, 4, 5].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}


export default function Popular() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.header}>
        <SendOutlinedIcon fontSize='large' style={{fill: '#5bbfba'}}/>
        <h1 className={classes.text}>Popular Destinations & Packages</h1>
        <MoreVertOutlinedIcon className={classes.rightJustify} fontSize='large'/>
      </div>
      <div className={classes.leftAlign}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className={classes.demo}>
              <List>
                {generate(
                  <ListItem>
                    <ListItemText
                      primary="Lorem ipsum dolor sit"
                    />
                    <div className={classes.colorStrip}></div>
                  </ListItem>,
                )}
              </List>
            </div>
          </Grid>
        </Grid>
        <MapChart />
      </div>
    </div>
  )
}