const fs = require('fs');

const DB_PASSWORD = fs.readFileSync(process.env.POSTGRES_PASSWORD_FILE, { encoding: 'utf8' }).trim();

module.exports = require('knex')({
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    user : process.env.POSTGRES_USER,
    password : DB_PASSWORD,
    database : process.env.POSTGRES_DB,
  }
});

