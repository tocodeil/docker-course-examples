const axios = require('axios');
const fs = require('fs');

const API_KEY = fs.readFileSync(process.env.WEATHER_API_KEY_FILE, { encoding: 'utf8' });
const DB_PASSWORD = fs.readFileSync(process.env.POSTGRES_PASSWORD_FILE, { encoding: 'utf8' }).trim();

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    user : process.env.POSTGRES_USER,
    password : DB_PASSWORD,
    database : process.env.POSTGRES_DB,
  }
});

axios.get('http://api.weatherapi.com/v1/current.json', {
  params: {
    q: 'Tel Aviv',
    key: API_KEY,
  }
})
  .then(async function (response) {
    // handle success
    const now = Date.now();
    const { data } = response;
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
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

