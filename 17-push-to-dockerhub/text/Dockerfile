FROM node:14

COPY . /app

WORKDIR /app

RUN npm install

ENV DEBUG=""
ENV PORT=3000

CMD ["npm", "start"]
