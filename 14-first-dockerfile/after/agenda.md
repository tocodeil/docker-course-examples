# A First Dockerfile

[x] Why build your own image
  - share with the world
  - preparing for production

[x] How to build an image
  - Dockerfile
  - .dockerignore file
  - Context directory

[x] Demo: Building an image
  - node.js starter code
  - writing Dockerfile and .dockerignore
  - building the image
  - running it in a container





































# Useful Snippets


Dockerfile:

```
FROM node:16

WORKDIR /app

COPY . .

RUN npm install --production

CMD ["node", "main.js"]

```

Build an image:

```
docker build . -t <image_name>
```

Run a container:

```
docker run --rm -it <image_name>
```

