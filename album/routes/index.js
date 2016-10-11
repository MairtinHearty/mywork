'use strict'

const db = require('../config/database');
var express = require('express');
var router = express.Router();
const album = db.get('albums')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/albums', (req, res) =>{
  res.render('albums')
})
router.get('/albums/new', (req, res) =>{
  res.render('new_album')
})
router.post('/albums/new', (req, res) =>{
  album.insert(req.body, (err, data) => {
    if(err) console.log(err)
    else console.log('Album successfully added')
    res.status(201)
    res.render('albums', {id: data._id})
  })
})
module.exports = router;
