# Moving To Production

[ ] Build an image to service "db"

[ ] Build an image to service "weather-api-server"

[ ] Build an image to service "query-script"

[ ] test everything works















## Useful Snippets

Build and push an image (run from the directory with Dockerfile):

```
$ docker build . -t ynonp/21-production-weather-api-server:1.0
$ docker push ynonp/21-production-weather-api-server:1.0
```

Define secrets in docker-compose.yml

```
services:
  db:
    secrets:
      - postgres-passwd

secrets:
  postgres-passwd:
    file: secrets/postgres-passwd

  weather-apikey:
    file: secrets/weather-apikey

```

