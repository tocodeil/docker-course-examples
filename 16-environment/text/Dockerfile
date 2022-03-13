FROM node:16

COPY ./app /app

WORKDIR /app

RUN npm install

ENV DEBUG=""
ENV PORT=5000

CMD ["npm", "start"]
