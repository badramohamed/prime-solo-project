const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');


/**
 * detailed route information by id
 */
  router.get('/:id', (req, res) => {
   const  id  = req.params;
   console.log('the book id is', id)
   axios({
     method: 'GET', 
     url: `https://www.googleapis.com/books/v1/volumes?q=${id}`,
    //  params:{
    //     q: id
    //  }
   }).then((response) => {
         console.log(response.data)
         res.send(response.data);
   }).catch( err => {
         console.log(err)
         res.sendStatus(500);
   });
})

module.exports = router;