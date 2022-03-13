var express = require('express');
var router = express.Router();
const { getLatestReports } = require('../lib/db');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const reports = await getLatestReports();
  res.send(reports);
});

module.exports = router;
