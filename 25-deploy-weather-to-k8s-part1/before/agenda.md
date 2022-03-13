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

Create crontab for cron based containers (write this in Dockerfile)

```
RUN echo "0 8 * * * root node /app/query-weather.js > /proc/1/fd/1 2>/proc/1/fd/2" >> /etc/crontab
```

Cron based container entrypoint.sh script:

```
#!/bin/bash

printenv >> /etc/environment

cron -f
```
