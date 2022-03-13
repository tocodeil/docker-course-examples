# Example: Adding Background Job

[ ] Create a weather-api query script
  - Read API Key file from environment variable
  - read postgres password and api key from the secrets

[ ] Docker compose in dev
  - Use node:17 image
  - Read files from local path
  - Install dependencies on container startup
  - Map secrets using volumes
  - Map local sources using volumes

[ ] Finish the script to actually write to the Database
  - Install knex.js
  - Connect to the database with knex
  - Manually run the script

[ ] Connect to the DB and verify data is there















## Useful Snippets

Script to query weather-api

```
const axios = require('axios');
const fs = require('fs');

const API_KEY = fs.readFileSync(process.env.WEATHER_API_KEY_FILE, { encoding: 'utf8' });

axios.get('http://api.weatherapi.com/v1/current.json', {
  params: {
    q: 'Tel Aviv',
    key: API_KEY,
  }
})
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
```

Code to connect from Node.JS to SQL database with knex:

```
const knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'db',
    user : process.env.POSTGRES_USER,
    password : DB_PASSWORD,
    database : process.env.POSTGRES_DB,
  }
});

knex.select().from('weather').then((result) => {
  console.log(result);
  knex.destroy();
});
```

Code to write the query results to the DB using knex:

```
try {
  await knex('weather').insert({
    queried_at_day: knex.raw('NOW()'),
    queried_at_time: knex.raw('NOW()'),
    temprature: data.current.temp_c,
    description: data.current.condition.text,
  });
} catch(err) {
  // DB Error, no big deal it's probably
  // because of the index
}
knex.destroy();
console.log(response.data);
```
