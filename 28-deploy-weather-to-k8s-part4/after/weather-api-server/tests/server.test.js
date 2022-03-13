const request = require('supertest');
const app = require('../app');
const knex = require('../lib/db');

const meteo = {
  queried_at_day: '1/1/2021',
  queried_at_time: '00:00:00',
  temprature: 18,
  description: 'Test',
};

describe('Weather Endpoint', () => {
  beforeEach(async () => {
    await knex('weather').del();
    await knex('weather').insert(meteo);
  });

  it('should return current data', async () => {
    const res = await request(app)
      .get('/');

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual([meteo]);
  })
})
