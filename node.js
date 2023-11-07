const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected to the database');

  const customQuery = 'SELECT * FROM employee';

  connection.query(customQuery, (queryErr, results) => {
    if (queryErr) {
      console.error('Error executing query:', queryErr);
      connection.end();
      return;
    }

    console.log('Query results:', results);

    connection.end();
  });
});

connection.on('error', (err) => {
  console.error('Database connection error:', err);
  connection.end();
});

process.on('exit', () => {
  connection.end();
});
