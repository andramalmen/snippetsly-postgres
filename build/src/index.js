"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const express_1 = __importDefault(require("express"));
const typescript_rest_1 = require("typescript-rest");
const PORT = config_1.default.get('port') || 8080;
const app = express_1.default();
app.get('/hello', async (_req, res) => {
    res.send({
        message: 'hello world',
    });
});
typescript_rest_1.Server.buildServices(app);
app.listen({ port: PORT }, () => console.info(`Rest Server listening on port ${PORT}!`));
//# sourceMappingURL=index.js.map