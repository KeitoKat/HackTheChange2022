var express = require('express');
var router = express.Router();

/* Host Family ids and attributes */
let users = [
  {id: 1, hostName: 'hostName1'},
  {id: 2, hostName: 'hostName2'},
  {id: 3, hostName: 'hostName3'}]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;
