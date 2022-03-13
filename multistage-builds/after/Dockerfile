FROM node:17 AS builder

WORKDIR /app
COPY next-demo-app .

ENV NODE_ENV=production

RUN npm install
RUN npm run build

# --------

FROM nginx:1.21-alpine

COPY --from=builder /app/out /usr/share/nginx/html/

















