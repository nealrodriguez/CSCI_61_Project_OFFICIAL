const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Okarun11!',
  database: 'CSCI_61',
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected!');
});

app.get('/api/users', (req, res) => {
  db.query('SELECT * FROM Users;', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
