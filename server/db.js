const Pool = require('pg').Pool;

// configuration for connecting to db
const pool = new Pool({
  user: "postgres",
  password: "myPassword",
  host: "localhost",
  port: 5432,
  database: "wetbat"
});

module.exports = pool;