const fs = require('fs');
const axios = require('axios').default;

const { POSTGRES_PASSWORD_FILE, WEATHER_APIKEY_FILE } = process.env;

const dbPassword = fs.readFileSync(POSTGRES_PASSWORD_FILE, { encoding: 'utf8' }).trim();

const apiKey = fs.readFileSync(WEATHER_APIKEY_FILE, { encoding: 'utf8' }).trim();

const url = 'http://api.weatherapi.com/v1/current.json';
async function main() {
  const resp = await axios.get(url, {
    params: {
      key: apiKey,
      q: 'Tel Aviv',
    },
  });

  console.log(resp.data);
  const data = resp.data;


  const knex = require('knex')({
    client: 'pg',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.POSTGRES_USER,
      password : dbPassword,
      database : process.env.POSTGRES_DB,
    }
  });

  try {
    await knex('weather').insert({
      queried_at_day: knex.raw('NOW()'),
      queried_at_time: knex.raw('NOW()'),
      temprature: data.current.temp_c,
      description: data.current.condition.text,
    });
  } catch(err) {
    console.log(err);
    // DB Error, no big deal it's probably
    // because of the index
  }
  knex.destroy();
}

main();
