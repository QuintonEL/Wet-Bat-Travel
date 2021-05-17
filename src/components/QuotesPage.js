import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const QuotesPage = () => {
  const [quotes, setQuotes] = useState([]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getQuotes = async () => {
    try {

      const response = await fetch('http://localhost:3001/quotes');
      const jsonData = await response.json();

      setQuotes(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <Fragment>
      <div class="header">
        <h1>Quotes</h1>
        <p>Current travel packages</p>
      </div>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Departure</th>
            <th>Destination</th>
            <th>Departure Date</th>
            <th>Return Date</th>
            <th>Number of Travellers</th>
            <th>Transportation</th>
            <th>Contact</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map(quote => (
            <tr>
              <td>{quote.dep_location}</td>
              <td>{quote.des_location}</td>
              <td>{quote.dep_date}</td>
              <td>{quote.ret_date}</td>
              <td>{quote.num_travellers}</td>
              <td>{quote.transportation}</td>
              <td>{quote.contact}</td>
              <td><Button variant="contained" color="primary" onClick={handleOpen}>Details</Button></td>
            </tr>
          ))}
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">Details</h2>
                <p id="transition-modal-description">Some Details</p>
              </div>
            </Fade>
          </Modal>
        </tbody>
      </table>
    </Fragment>
  )
}

export default QuotesPage;