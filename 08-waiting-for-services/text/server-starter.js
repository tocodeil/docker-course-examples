const express = require('express')
const app = express()
const port = 3000
const { MongoClient } = require("mongodb");
const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST } = process.env;
const uri = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:27017/`;

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


