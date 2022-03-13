# Add Test Environment

[ ] Docker Compose and Environments

[ ] Create a first test
  - install and configure jest
  - write test code

[ ] Create a new docker-compose-test.yml
  - run with project name

[ ] Create a real test
  - insert fixture to test db
  - verify route returns the correct result

[ ] Fix the code and see test re-run











## Useful Snippets

Run a project with name and different docker compose file:

```
docker compose -f docker-compose-test.yml -p weather-test up
```

Stop a project with name and different docker compose file:

```
docker compose -f docker-compose-test.yml -p weather-test down
```

Install jest and supertest:

```
$ npm install --save jest supertest
```

A First Jest Test:

```
// file: demo.test.js (must use .test.js file extension)

test("it works", () => {
  expect(1).toEqual(1);
});

```

A Real Jest Test:

```
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

```
