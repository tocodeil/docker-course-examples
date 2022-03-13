const request = require('supertest');
const app = require('../app');
const { knex } = require('../lib/db');

afterAll(() => {
  knex.destroy();
});

beforeEach(async () => {
  await knex('weather').del();
});

test("it starts with an empty DB", async () => {
  const resp = await request(app).get('/');
  expect(resp.body).toEqual([]);
});

test("server returns correct data when some data is in the DB", async () => {
  await knex('weather').insert({
    queried_at_day: "2022-03-02T00:00:00.000Z",
    queried_at_time: "08:49:41.557124",
    temprature: "20",
    description: "sunny",
  });

  const resp = await request(app).get('/');
  expect(resp.body).toEqual([
    {
      "description": "sunny",
      "queried_at_day": "2022-03-02T00:00:00.000Z",
      "queried_at_time": "08:49:41.557124",
      "temprature": 20,
    }
  ]);
});
