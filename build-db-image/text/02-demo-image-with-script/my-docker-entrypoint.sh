#!/usr/bin/env bash
set -Eeo pipefail

curl https://gist.githubusercontent.com/ynonp/e5ac316e6e6b50edcd5fe3277c9db580/raw/e8468239b4410c16899f91113104967c3ae860a8/demo.sql -o /docker-entrypoint-initdb.d/01-create-table.sql

echo "Running original entrypoint with $@"

exec /usr/local/bin/docker-entrypoint.sh "$@"
