const express = require('express');
const app = express();
const port = 3000;

const { MongoClient } = require("mongodb");
const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST } = process.env;
const uri = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:27017/`;

const waitOn = require('wait-on');

const opts = {
  resources: [
    `tcp:${MONGO_HOST}:27017`,
  ],
};


// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    await waitOn(opts);

    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });

    app.get('/', (req, res) => {
      res.send("Connected To Mongo :)");
    });

    app.listen(port);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
