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
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderBottomStyle: 'solid',
  },
  input: {
    "& .MuiFilledInput-root": {
      background: "rgba(224, 251, 255, 0.47)"
    }
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
  
  // useState for the two dropdowns in order to select an option
  const [people, setPeople] = React.useState('');
  const [transportation, setTransportation] = React.useState('');

  // handlechange when selecting different options
  const handleChange = (event) => {
    setPeople(event.target.value);
    setTransportation(event.target.value);
  };

  return (
    <div>
      <div className={classes.header}>
        {/* the card header */}
        <FastForwardOutlinedIcon fontSize='large' style={{fill: '#5bbfba'}}/>
        <h1 className={classes.text}>Quick Quote</h1>
        <ZoomOutMapIcon className={classes.rightJustify} fontSize='large'/>
      </div>

      <div>
        {/* begin form with textfields for the body */}
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="filled-basic" label="From" variant="filled" className={classes.input}/>
          <TextField id="filled-basic" label="Destination" variant="filled" className={classes.input}/>
          <TextField
            id="date"
            label="Depart Date"
            type="date"
            className={classes.input}
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="date"
            label="Return Date"
            type="date"
            className={classes.input}
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl variant="filled" className={classes.formControl} className={classes.input}>
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
          <FormControl variant="filled" className={classes.formControl} className={classes.input}>
            <InputLabel id="transportation" >Transportation </InputLabel>
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
          <TextField id="filled-basic" label="Name" variant="filled" className={classes.input}/>
          <Button variant="contained" className={classes.button} disableElevation>
            <b>Create a Quote</b>
          </Button>
        </form>
      </div>
    </div>
  )
}