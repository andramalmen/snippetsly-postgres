import config from 'config';
import express from 'express';
import { Server } from 'typescript-rest';

const PORT = config.get('port') || 8080;

const app: express.Application = express();

app.get('/hello', async (_req, res) => {
    res.send({
        message: 'hello world',
    });
});
Server.buildServices(app);

app.listen({ port: PORT }, () => console.info(`Rest Server listening on port ${PORT}!`));
