# snippetsly-postgres

# Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Minimum [Node v14](https://nodejs.org/en/)
Minimum [NPM v7](https://www.npmjs.com/get-npm)

## Start development
To start the app in development mode, run one the following command:
```bash
npm run dev
```
To start the app in development watch mode, run one the following command:
```bash
npm run dev:watch
```
To build the project for production and run it, run one the following commands:
```bash
npm run build
npm start
```
## Start development with Docker
Start the server in development mode:
```bash
docker-compose up
```
Build and run the image for production:
```bash
docker build -t snippetsly .
docker run -p 8080:8080 snippetsly
```

## Linting and formatting

The project is using [Eslint](https://eslint.org) and [Prettier](https://prettier.io/) for code formatting.
To check if the project has any linting issues, run the following command:
```bash
npm run lint
```
To check if the project has any formatting issues, run the following command:
```bash
npm run format:check
```
To format all code, run the following command:
```bash
npm run format
```
To validate that the changes are ready for deployment, run:
```bash
npm run validate
```