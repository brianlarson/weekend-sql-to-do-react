const router = require('express').Router();
const pool = require('../modules/pool.js');

// GET route: '/api/todos'
router.get('/', (req, res) => {
  // Run SQL query statement with pg.Pool to retrieve todos
  const statement = `SELECT * FROM "todos";`;
  pool.query(statement)
    .then(result => {
      console.log('GET request successful:', result.rows);
      res.send(result.rows);
  })
    .catch(err => {
      console.log('Error with GET request:', err);
      res.sendStatus(500);
  });
});

// POST

// PUT

// DELETE

module.exports = router;
