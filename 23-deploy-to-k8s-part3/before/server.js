const express = require('express')
const app = express()
const port = 3000
const { createClient } = require('redis');
const { REDIS_HOST } = process.env;

(async () => {

  const client = createClient({ url: `redis://${REDIS_HOST}` });
  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();
  app.post('/', async (req, res) => {
    const newValue = await client.incr('counter');
    res.send({ counter: newValue })
  })

  app.get('/', async (req, res) => {
    const counter = await client.get('counter');
    res.send({ counter })
  })

})();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

