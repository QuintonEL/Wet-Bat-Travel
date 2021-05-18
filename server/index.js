const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json()); //req.body

///////routes///////

//get all quotes
app.get('/quotes', async(req, res)=> {
  try{
    const allQuotes = await pool.query("SELECT * FROM quotes")
    res.json(allQuotes.rows);
  } catch (err) {
    console.error(err.message);
  }
})

//get a specific quote id
app.get('/quotes/:id', async(req, res)=> {
  try{
    const { id } = req.params;
    const quote = await pool.query("SELECT * FROM quotes WHERE quote_id = $1", [id]);

    res.json(quote.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

//this is the port our restful api will be running on configured so it can be deployed as well
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});