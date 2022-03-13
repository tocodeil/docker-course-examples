const fs = require('fs');

const { POSTGRES_PASSWORD_FILE } = process.env;

const dbPassword = fs.readFileSync(POSTGRES_PASSWORD_FILE, { encoding: 'utf8' }).trim();

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    user : process.env.POSTGRES_USER,
    password : dbPassword,
    database : process.env.POSTGRES_DB,
  }
});

async function getLatestReports() {
  return await knex.from('weather').select('*').limit(10);
}

module.exports = {
  getLatestReports,
  knex,
};
