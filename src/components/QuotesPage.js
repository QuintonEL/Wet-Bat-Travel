import React, { Fragment, useEffect, useState } from 'react';
import QuoteDetails from './QuoteDetails';


const QuotesPage = () => {
  const [quotes, setQuotes] = useState([]);

  // make async request to api to get info from db
  const getQuotes = async () => {
    try {

      const response = await fetch('http://localhost:3001/quotes');
      const jsonData = await response.json();

      setQuotes(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  // call the function to make request, ensure to have callback to it doesn't keep repeating request
  useEffect(() => {
    getQuotes();
  }, []);

  return (

    <Fragment>
      <div className="header">
        <h1>Quotes</h1>
        <p>Current travel packages</p>
      </div>
      <table className="table mt-5 text-center">
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
          {/* map through each quote object and display each one of a row of table */}
          {quotes.map(quote => (
            <tr>
              <td>{quote.dep_location}</td>
              <td>{quote.des_location}</td>
              <td>{quote.dep_date}</td>
              <td>{quote.ret_date}</td>
              <td>{quote.num_travellers}</td>
              <td>{quote.transportation}</td>
              <td>{quote.contact}</td>
              <td><QuoteDetails quote={quote}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

export default QuotesPage;