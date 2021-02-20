import config from 'config';
import express from 'express';
import morgan from 'morgan';
import { createConnection } from 'typeorm';
import { Server } from 'typescript-rest';

import dbConfig from '../config/database';
import SnippetController from './controllers/snippet.controller';
import errorHandler from './middleware/error';

const PORT = config.get('port') || 8080;

const app: express.Application = express();
app.use(express.json());
app.use(morgan('tiny'));

Server.buildServices(app, SnippetController);
app.use(errorHandler);

createConnection(dbConfig)
    .then(() => {
        app.listen({ port: PORT }, () => console.info(`Rest Server listening on port ${PORT}!`));
    })
    .catch(err => {
        console.log('Unable to connect to db', err);
        process.exit(1);
    });
