import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import Queue from './lib/Queue';
import routes from './routes';

class App {
    constructor() {
        this.server = express();

        this.queue();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(cors());
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }

    queue() {
        Queue.processQueue();
    }
}

export default new App().server;
