# Example: Add API Server

[ ] Create the new node.js express app

[ ] Add new express app to docker-compose.yml

[ ] Verify you can connect to your new express app

[ ] Move to nodemon

[ ] Modify express app to query the database for weather reports

[ ] Verify you can see weather reports through the API server














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
