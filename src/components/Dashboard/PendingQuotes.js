import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RestoreOutlinedIcon from '@material-ui/icons/RestoreOutlined';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
  table: {
    minWidth: 600,
  },
  text: {
    marginLeft: 10,
  }
}));

function createData(id, name, destination, price) {
  return { id, name, destination, price };
}

const rows = [
  createData('123455678', 'Katty Abcdefghgj', 'VANCOUVER', '$ 1000.00'),
  createData('123455678', 'Katty Abcdefghgj', 'BEIJING', '$ 1000.00'),
  createData('123455678', 'Katty Abcdefghgj', 'NEW YORK', '$ 1000.00'),
  createData('123455678', 'Katty Abcdefghgj', 'ARGENTINA', '$ 1000.00'),
  createData('123455678', 'Katty Abcdefghgj', 'SOUTH AFRICA', '$ 1000.00'),
];


export default function PendingQuotes() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.header}>
        <RestoreOutlinedIcon fontSize='large' style={{fill: '#5bbfba'}}/>
        <h1 className={classes.text}>Pending Quotes</h1>
        <RefreshOutlinedIcon className={classes.rightJustify} fontSize='large'/>
        <ZoomOutMapIcon fontSize='large'/>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><b>ID #</b></TableCell>
                <TableCell align='center'><b>NAME</b></TableCell>
                <TableCell align='center'><b>DESTINATION</b></TableCell>
                <TableCell align='center'><b>PRICE</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.destination}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}