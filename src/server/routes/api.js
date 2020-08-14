const express = require('express');
const myController = require('../controllers/myController');

const router = express.Router();

// serve the /info API listening to get requests, retrive the info from database and send as a response to the front-end
router.get('/', myController.getInfo, (req, res) => {
  res.status(200).json({...res.locals.data});
})

// serve the /info API listening to post requests, retrive the info from front-end, save it to database and send as a response to the front-end with the id created by the database
router.post('/', myController.postInfo, (req, res) => {
  res.status(200).json({...res.locals.data});
})


module.exports = router;