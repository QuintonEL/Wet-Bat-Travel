import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';

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


export default function NewLeads() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <MailOutlineOutlinedIcon fontSize='large'/>
      <h1 className={classes.text}>New Leads</h1>
      <RefreshOutlinedIcon className={classes.rightJustify} fontSize='large'/>
      <ZoomOutMapIcon fontSize='large'/>
    </div>
  )
}