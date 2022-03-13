const express = require('express');
const knex = require('../lib/db');
const router = express.Router();


/* GET home page. */
router.get('/', async function(req, res, next) {
  const result = await knex('weather').limit(10).select();
  res.send(result.map((data) => ({
    queried_at_day: new Intl.DateTimeFormat('en-US').format(data.queried_at_day),
    queried_at_time: data.queried_at_time,
    temprature: data.temprature,
    description: data.description,
  })));
});

module.exports = router;
