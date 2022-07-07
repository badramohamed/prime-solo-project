const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

// search get that will grab all searchs using the api
router.get('/', (req,res)=>{
 const search = req.params.search
    console.log('in the /search get', search);
    axios({
        method: 'GET', 
        url: `https://www.googleapis.com/books/v1/volumes?q=${search}`,
        params:{
            api_key: process.env.GOOGLE_API_KEY,
            limit:40,
        }
    }).then(response=>{
        console.log('axios response', response.data)
        res.send(response.data.items);
    }).catch(err=>{
        console.log('error in books', err.data);
        res.sendStatus(500);
    })
});


module.exports = router;