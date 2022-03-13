FROM node:16

WORKDIR /app
COPY . .

ENV NODE_ENV=production
RUN npm install
CMD ["node", "main.js"]
