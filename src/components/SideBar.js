import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import TocIcon from '@material-ui/icons/Toc';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import TimelineIcon from '@material-ui/icons/Timeline';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

// react router for handing the routing
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import the rest of the dashboard components and the quotes page so we can display either one
import Dashboard from './Dashboard/Dashboard';
import Quotes from './QuotesPage';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#dfdfdf',
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            {/* the list of all sidebar links, only Home and Quotes have functionality */}
            <List>
              {/* wrap in link tag to route to home url */}
              <Link to='/'>
                <ListItem button key='Home'>
                  <ListItemIcon> <HomeIcon/></ListItemIcon>
                  <ListItemText primary='Home' />
                </ListItem>
              </Link>
              {/* wrap in link tag to route to quotes url */}
              <Link to='/quotes'>
                <ListItem button key='Quotes'>
                  <ListItemIcon> <AttachMoneyIcon/></ListItemIcon>
                  <ListItemText primary='Quotes' />
                </ListItem>
              </Link>
              <ListItem button key='Leads'>
                <ListItemIcon> <TocIcon/></ListItemIcon>
                <ListItemText primary='Leads' />
              </ListItem>
              <ListItem button key='Tours'>
                <ListItemIcon> <SendIcon/></ListItemIcon>
                <ListItemText primary='Tours' />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button key='Invoices'>
                  <ListItemIcon> <InsertDriveFileIcon/></ListItemIcon>
                  <ListItemText primary='Invoices' />
                </ListItem>
                <ListItem button key='Analytics'>
                  <ListItemIcon> <TimelineIcon/></ListItemIcon>
                  <ListItemText primary='Analytics' />
                </ListItem>
                <ListItem button key='Team'>
                  <ListItemIcon> <GroupIcon/></ListItemIcon>
                  <ListItemText primary='Team' />
                </ListItem>
                <ListItem button key='Admin'>
                  <ListItemIcon> <SettingsIcon/></ListItemIcon>
                  <ListItemText primary='Admin' />
                </ListItem>
                <ListItem button key='Support'>
                  <ListItemIcon> <HelpOutlineIcon/></ListItemIcon>
                  <ListItemText primary='Support' />
                </ListItem>
            </List>
          </div>
        </Drawer>
        {/* these routes decide what content to display on the main page body depending on url */}
        <main className={classes.content}>
          <Route path='/' exact component={Dashboard}/>
          <Route path='/quotes' component={Quotes}/>
        </main>
      </div>
    </Router>
  );
}
