var express = require('express');
var router = express.Router();

/* Host Family ids and attributes */
let users = [
  {id: 1, hostName: 'Olivia', familySize:'5' , languages: ['English ', 'French']},
  {id: 2, hostName: 'James',  familySize: '4', languages: ['French ', 'German ', 'Italian']},
  {id: 3, hostName: 'Casey',  familySize: '2', languages: ['English , Mandarin']}]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;
