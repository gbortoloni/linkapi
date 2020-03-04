import { Router } from 'express';

import PipedriveController from './app/controllers/PipedriveController';

const routes = new Router();

routes.post('/webhook/pipedrive', PipedriveController.index);
routes.post('/webhook/pipedrive', PipedriveController.store);

export default routes;
