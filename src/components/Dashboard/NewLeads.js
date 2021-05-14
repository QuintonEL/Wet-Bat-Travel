import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

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
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  text: {
    marginLeft: 10,
  }
}));


export default function NewLeads() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.header}>
        <MailOutlineOutlinedIcon fontSize='large'/>
        <h1 className={classes.text}>New Leads</h1>
        <RefreshOutlinedIcon className={classes.rightJustify} fontSize='large'/>
        <ZoomOutMapIcon fontSize='large'/>
      </div>
      <div>
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Jane Smith"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                  </Typography>
                  {"Hey! I want to place my package"}
                </React.Fragment>
              }
            />
            <span>13:40 PM</span>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="John Doe"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                  </Typography>
                  {"Hey! I want to place my package"}
                </React.Fragment>
              }
            />
            <span>13:50 PM</span>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Remi Watts"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                  </Typography>
                  {'Hey! I want to place my package'}
                </React.Fragment>
              }
            />
            <span>14:40 PM</span>
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Cindy Baker"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                  </Typography>
                  {'Hey! I want to place my package'}
                </React.Fragment>
              }
            />
            <span>15:50 PM</span>
          </ListItem>
        </List>
      </div>
    </div>
  )
}