# Docker Compose Features

[ ] Port mapping demo with nginx

[ ] Volume mapping demo by catting a file

[ ] Mapping the same volume to multiple containers
  - nginx server in one container
  - another container that changes its HTML file

[ ] Environment variables demo with wordpress
  wordpress image (wordpress:latest):
  - WORDPRESS_DB_HOST: db
  - WORDPRESS_DB_USER: exampleuser
  - WORDPRESS_DB_PASSWORD: examplepass
  - WORDPRESS_DB_NAME: exampledb

  db image (mysql:5.7):
  - MYSQL_DATABASE: exampledb
  - MYSQL_USER: exampleuser
  - MYSQL_PASSWORD: examplepass
  - MYSQL_RANDOM_ROOT_PASSWORD: '1'
  
