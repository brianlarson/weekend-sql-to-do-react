const router = require('express').Router();
const pool = require('../modules/pool.js');

// ********************* //
// ** 🙀 Oh C.R.U.D.! ** //
// ********************* //

// GET route: '/api/todos'
router.get('/', (_, res) => {
  // Run SQL query statement with pg pool to retrieve todos
  const statement = `SELECT * FROM "todos" ORDER BY "id";`;
  pool.query(statement)
    .then(result => {
      // console.log('Fetched to-dos from database…', result.rows);
      res.send(result.rows);
  })
    .catch(err => {
      console.log('Error with GET request:', err);
      res.sendStatus(500);
  });
});

// POST route: '/api/todos'
router.post('/', (req, res) => {
  // Run SQL query statement with pg pool to add a new to-do
  const statement = `INSERT INTO "todos" ("text") VALUES ('${req.body.text}');`;
  pool.query(statement)
    .then(result => {
      console.log('Added to-do to database…', result.rows);
      res.sendStatus(200);
  })
    .catch(err => {
      console.log('Error with POST request:', err);
      res.sendStatus(500);
  });
});

// PUT route: '/api/todos'
router.put('/', (req, res) => {
  // console.log(`req.body:`, req.body);
  const statement = `UPDATE "todos" SET "isComplete" = ${!req.body.isComplete} WHERE "id" = ${req.body.id}`;
  pool.query(statement)
    .then(result => {
      res.sendStatus(200);
  })
    .catch(err => {
      console.log(err);
  });
});

// DELETE route: '/api/todos'

module.exports = router;
