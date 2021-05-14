import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FastForwardOutlinedIcon from '@material-ui/icons/FastForwardOutlined';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#5bbfba',
    borderRadius: 42,
    padding: 15,
    color: 'white',
  },
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
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  text: {
    marginLeft: 10,
  },
}));


export default function QuickQuote() {
  const classes = useStyles();
  const [people, setPeople] = React.useState('');
  const [transportation, setTransportation] = React.useState('');

  const handleChange = (event) => {
    setPeople(event.target.value);
    setTransportation(event.target.value);
  };

  return (
    <div>
      <div className={classes.header}>
        <FastForwardOutlinedIcon fontSize='large'/>
        <h1 className={classes.text}>Quick Quote</h1>
        <ZoomOutMapIcon className={classes.rightJustify} fontSize='large'/>
      </div>
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="filled-basic" label="From" variant="filled" />
          <TextField id="filled-basic" label="Destination" variant="filled" />
          <TextField
            id="date"
            label="Depart Date"
            type="date"
            variant="filled"
            InputLabelProps={{
              shrink: true,
              color: 'red',
            }}
          />
          <TextField
            id="date"
            label="Return Date"
            type="date"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="people">People</InputLabel>
            <Select
              labelId="people"
              id="people-input"
              value={people}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="transportation">Transportation</InputLabel>
            <Select
              labelId="transportation"
              id="transportation-input"
              value={transportation}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={5}>Car</MenuItem>
              <MenuItem value={6}>Plane</MenuItem>
              <MenuItem value={7}>Bus</MenuItem>
              <MenuItem value={8}>Train</MenuItem>
            </Select>
          </FormControl>
          <TextField id="filled-basic" label="Name" variant="filled" />
          <Button variant="contained" className={classes.button} disableElevation>
            <b>Create a Quote</b>
          </Button>
        </form>
      </div>
    </div>
  )
}