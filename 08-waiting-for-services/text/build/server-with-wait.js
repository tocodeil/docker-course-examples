const express = require('express')
const app = express()
const port = 3000

const waitOn = require('wait-on');
const resources = [
  'tcp:redis:6379'
];

waitOn({ resources }, () => {
  // here everything's ready

  let
  redis     = require('redis'),
    /* Values are hard-coded for this example, it's usually best to bring these in via file or environment variable for production */
    client    = redis.createClient({
      port      : 6379,
      host      : 'redis',        // replace with your hostanme or IP address
    });

  app.get('/', (req, res) => {
    client.get('count', (err, count) => {
      if (err) return next(err);
      res.send({ count });
    });
  });

  app.post('/', (req, res, next) => {
    client.incr('count', (err, count) => {
      if (err) return next(err);

      res.send({ count });
    });
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
});
