var express = require('express');
var router = express.Router();

/* Geust's ids and attributes */
let guests = [
  {id: 1, guestName: 'guestName1'},
  {id: 2, guestName: 'guestName2'},
  {id: 3, guestName: 'guestName3'}]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(guests);
});

module.exports = router;
