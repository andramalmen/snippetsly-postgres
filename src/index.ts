import config from 'config';
import express from 'express';
import morgan from 'morgan';
import { Server } from 'typescript-rest';

import SnippetController from './controllers/SnippetController';
import errorHandler from './middleware/error';

const PORT = config.get('port') || 8080;

const app: express.Application = express();
app.use(express.json());
app.use(morgan('tiny'));

app.get('/hello', async (_req, res) => {
    res.send({
        message: 'hello world',
    });
});
Server.buildServices(app, SnippetController);
app.use(errorHandler);

app.listen({ port: PORT }, () => console.info(`Rest Server listening on port ${PORT}!`));
