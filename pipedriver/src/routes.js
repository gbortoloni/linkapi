import { Router } from 'express';

import OportunidadeController from './app/controllers/OportunidadeController';

const routes = new Router();

routes.post('/webhook/oportunidades', OportunidadeController.store);

export default routes;
