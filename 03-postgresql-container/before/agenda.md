# Using postgres docker image

[ ] Reading postgres info on dockerhub

[ ] Creating a postgres server container on my machine
  - Show error because we haven't set the environmnet variables
  - Compare different image tags (with / without -alpine)
  - Fix the error and create the DB

[ ] Creating a client postgres container and connecting to the DB
  - from another docker container
  - from my local computer (with dbeaver)

[ ] Creating a persistent volume
  - What happens to the data when I close the container?
  - Creating and listing volumes
  - Mapping the volume to the container























------------------

Useful Snippets



1. Run postgres server with environment variables and post mapping:

docker run  -e POSTGRES_PASSWORD=ninja -e POSTGRES_USER=ynon -e POSTGRES_DB=helloworld postgres



2. Run postgres client and connect to host 192.168.0.8 with username and DB name

docker run -it --rm postgres psql -h 192.168.0.8 -U ynon helloworld



3. Run postgres server with volume named pgdata:

docker run  -v pgdata:/var/lib/postgresql/data -e POSTGRES_PASSWORD=ninja -e POSTGRES_USER=ynon -e POSTGRES_DB=helloworld postgres


