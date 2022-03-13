const express = require('express')
const app = express()
const port = 3000

let count = 0;

app.get('/', (_req, res) => {
  res.send({ count });
});

app.post('/', (_req, res) => {
  count += 1;
  res.send({ count });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
