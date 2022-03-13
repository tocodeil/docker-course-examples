FROM node:17 AS builder
WORKDIR /app

COPY next-demo-app .

RUN npm install
RUN npm run build
RUN npx next export

FROM nginx:1.21-alpine
COPY --from=builder /app/out /usr/share/nginx/html/

