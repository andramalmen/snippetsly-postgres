FROM node:14.15.5-buster-slim as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:14.15.5-buster-slim as server
WORKDIR /app
COPY package* ./
RUN npm ci --production
COPY --from=builder ./app/build ./build
EXPOSE 8080

CMD ["node", "start"]