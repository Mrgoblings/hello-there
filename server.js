const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'db', // Docker Compose service name for the database
  user: 'bob4o',
  password: '1000',
  database: 'bob4o-mysql',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Serve static files from the public directory
app.use(express.static('public'));

// Endpoint to get the list of cookies
app.get('/api/cookies', (req, res) => {
  // Query the database to get the list of cookies
  pool.query('SELECT * FROM cookies', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.json(results);
  });
});

// Endpoint to buy a cookie
app.post('/api/buy-cookie/:id', (req, res) => {
  const cookieId = req.params.id;
  const quantity = req.query.quantity || 1; // Default to 1 if quantity is not provided

  // Validate input
  if (isNaN(quantity) || quantity <= 0) {
    res.status(400).json({ error: 'Invalid quantity' });
    return;
  }

  // Implement logic to update the database (decrease quantity) when a cookie is bought
  // For simplicity, let's assume that buying a cookie reduces its quantity by the specified amount

  pool.query('UPDATE cookies SET quantity = quantity - ? WHERE id = ?', [quantity, cookieId], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.json({ message: 'Cookie(s) bought successfully!' });
  });
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
