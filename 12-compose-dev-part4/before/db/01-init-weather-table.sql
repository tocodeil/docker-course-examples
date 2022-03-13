CREATE TABLE weather(
  queried_at_day date,
  queried_at_time time,
  temprature float,
  description text
);

CREATE UNIQUE INDEX weather_day_index ON weather(queried_at_day, queried_at_time);

