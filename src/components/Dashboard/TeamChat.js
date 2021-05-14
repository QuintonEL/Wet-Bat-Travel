import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ChatIcon from '@material-ui/icons/Chat';
import Badge from '@material-ui/core/Badge';


const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
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
  },
}));


export default function TeamChat() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.header}>
        <ChatBubbleOutlineOutlinedIcon fontSize='large' style={{fill: '#5bbfba'}}/>
        <h1 className={classes.text}>Team Chat</h1>
        <MoreVertOutlinedIcon className={classes.rightJustify} fontSize='large'/>
      </div>
      <div>
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            variant="dot"
          >
          <Avatar alt="Lou Sanders" src="/static/images/avatar/1.jpg" />
          </StyledBadge>
            <ListItemText
              style={{paddingLeft: 20}}
              primary="Lou Sanders"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                  </Typography>
                  {"Customer service available"}
                </React.Fragment>
              }
            />
            <span><ChatIcon fontSize='large' style={{fill: '#5bbfba'}}/></span>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            variant="dot"
          >
          <Avatar alt="Mercy Abdacas" src="/static/images/avatar/1.jpg" />
          </StyledBadge>
            <ListItemText
              style={{paddingLeft: 20}}
              primary="Mercy Abdacas"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                  </Typography>
                  {"Customer service available"}
                </React.Fragment>
              }
            />
            <span><ChatIcon fontSize='large' style={{fill: '#5bbfba'}}/></span>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            variant="dot"
          >
          <Avatar alt="Master Chief" src="/static/images/avatar/1.jpg" />
          </StyledBadge>
            <ListItemText
              style={{paddingLeft: 20}}
              primary="Master Chief"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                  </Typography>
                  {"Customer service available"}
                </React.Fragment>
              }
            />
            <span><ChatIcon fontSize='large' style={{fill: '#5bbfba'}}/></span>
          </ListItem>
          <ListItem alignItems="flex-start">
          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            variant="dot"
          >
          <Avatar alt="Joe Dorian" src="/static/images/avatar/1.jpg" />
          </StyledBadge>
            <ListItemText
              style={{paddingLeft: 20}}
              primary="Joe Dorian"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                  </Typography>
                  {"Customer service available"}
                </React.Fragment>
              }
            />
            <span><ChatIcon fontSize='large' style={{fill: '#5bbfba'}}/></span>
          </ListItem>
        </List>
      </div>
    </div>
  )
}