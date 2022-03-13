FROM node:17

WORKDIR /app

# copy all files/folders from context directory
# to the image's WORKDIR
COPY . .

ENV NODE_ENV=production

RUN npm install

# ----

CMD ["node", "main.js"]
