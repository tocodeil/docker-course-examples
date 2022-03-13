# Example: Using Docker Compose to Develop a Weather App

[ ] What We're Building
  - Weather app
  - Weather data saved in DB
  - Node.JS / Express server to serve the data
  - Background script to fetch weather data from `weatherapi.com` and save to the DB

[ ] agenda for app development
  - part 1: the database
  - part 2: the background worker
  - part 3: the api
  - part 4: testing


[ ] PostgreSQL DB init
  - create .sql files

[ ] Postgres image in docker-compose
  - map init files to `/docker-entrypoint-initdb.d`
  - create persistent data in `/var/lib/postgresql/data`
  - set environment variables: POSTGRES_USER, POSTGRES_DB, POSTGRES_PASSWORD

[ ] Service in action
  - add a new sql file and run it on existing db


