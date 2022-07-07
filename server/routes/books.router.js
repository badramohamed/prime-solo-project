const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get all books
router.get('/', (req, res) => {
    const query = `
      SELECT * FROM user_books
      ORDER BY "user_id" ASC;
    `
    pool.query(query)
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: getting books', err);
        res.sendStatus(500)
      })
  });

// update books owned status in db 
router.put('/:id', (req, res) => {
  const  id  = req.params.id;
  console.log('put request for id', id);
  let sqlQuery = `
    UPDATE "user_books" 
    SET "completed" =  "completed"
    WHERE "id" = $1;
  `;
  const sqlParams = [
    true, id
  ];
  pool.query(sqlQuery, sqlParams)
    .then(() => {
      res.sendStatus(204);
    }).catch( (error) => {
      res.sendStatus(500); 
    })
});

router.post('/', (req, res) => {
    console.log('in post req.body is', req.body)
    const books = req.body;
    let sqlQuery = `
      INSERT INTO "user_books" 
        ("user_id", "book_id", "completed", "rating")
      VALUES 
        ($1, $2, $3, $4)
    `;
    const sqlParams = [ 1, books.id, books.completed, books.rating ];
    pool.query(sqlQuery, sqlParams)
      .then((result) => {
        console.log(`Added books to the database`, books);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error in post database `, error);
        res.sendStatus(500);
    })
  })

module.exports = router;