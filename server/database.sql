CREATE DATABASE wetbat;

-- this is the structure for how we are going to store each travel quote
CREATE TABLE quotes
(
  quote_id SERIAL PRIMARY KEY,
  dep_location VARCHAR(255),
  des_location VARCHAR(255),
  dep_date DATE,
  ret_date DATE,
  num_travellers VARCHAR(255),
  transportation TEXT,
  contact VARCHAR(255)
);