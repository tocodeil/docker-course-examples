var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const text = process.env.TEXT || "No text found in process.env.TEXT";
  res.send(text);
});

module.exports = router;
