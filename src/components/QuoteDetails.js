import React, { Fragment } from 'react';

// the quotedetails modals taking in quote as a prop so we can display the data
const QuoteDetails = ({ quote }) => {
  return <Fragment>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${quote.quote_id}`}>
      Details
    </button>

    <div class="modal fade" id={`id${quote.quote_id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>This is a {quote.transportation} for {quote.num_travellers} person(s) departing from {quote.dep_location} on {quote.dep_date} to {quote.des_location} with return on {quote.ret_date}. If you are interested in this package please contact us at {quote.contact}. Thank you!</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </Fragment>;
}

export default QuoteDetails;