# Example: Add API Server

[x] Create the new node.js express app

[x] Add new express app to docker-compose.yml
  - command: sleep infinity

[x] Verify you can connect to your new express app

[x] Move to nodemon
  - command: bash -c "npm install && npm install -g nodemon && nodemon bin/www"

[x] Modify express app to query the database for weather reports
  - take the code from query-script

[x] Verify you can see weather reports through the API server














## Useful Snippets

Index route that reads data from the DB:

```
const knex = require('../lib/db');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const result = await knex('weather').limit(10).select();
  res.send(result);
});

```


File lib/db.js used to connect to the DB:

```
const fs = require('fs');

const DB_PASSWORD = fs.readFileSync(process.env.POSTGRES_PASSWORD_FILE, { encoding: 'utf8' }).trim();

module.exports = require('knex')({
  client: 'pg',
  connection: {
    host : 'db',
    user : process.env.POSTGRES_USER,
    password : DB_PASSWORD,
    database : process.env.POSTGRES_DB,
  }
});


```
