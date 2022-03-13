const express = require('express')
const app = express()
const port = 3000
const { MongoClient } = require("mongodb");
const { MONGO_URL } = process.env;

const uri = MONGO_URL;

const client = new MongoClient(uri);


(async () => {
  await client.connect();
  console.log(`connected`);

  app.get('/', async (req, res) => {
    res.send("Connected To Mongo");
  })

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

})();


