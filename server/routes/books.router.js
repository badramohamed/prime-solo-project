const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get all books
router.get('/', (req, res) => {
    const query = `
      SELECT * FROM books
      ORDER BY "title" ASC;
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
  
  console.log('put request for id', id);
  let sqlQuery = `
    UPDATE "books" 
    SET "completed" = $1
    WHERE "id" = $2;
  `;
  const sqlParams = [
    true, req.params.id
  ];
  pool.query(sqlQuery, sqlParams)
    .then(() => {
      res.sendStatus(204);
    }).catch( (error) => {
      res.sendStatus(500); 
    })
});

router.post('/', (req, res) => {
    // console.log('in post req.body is', req.body)
  
    let sqlQuery = `
      INSERT INTO "books" 
        ("user_id", "cover", "title", "author", "description" )
      VALUES 
        ($1, $2, $3, $4, $5)
    `;
    const sqlValue = [ req.user.id, req.body.cover, req.body.title, req.body.author, req.body.description ];
    pool.query(sqlQuery, sqlValue)
      .then((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error in post database `, error);
        res.sendStatus(500);
    })
  })

module.exports = router;