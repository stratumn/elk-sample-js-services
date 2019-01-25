import * as express from 'express';
import Router from 'express-promise-router';
import * as bodyParser from 'body-parser';

import { createTask } from './create';
import { updateTask } from './task';
import { getUserTasks } from './tasks';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.configure();
  }

  private configure = () => {
    const router = Router();
    router.use(bodyParser.json());

    router.get('/user/:id/tasks', getUserTasks);
    router.post('/user/:id/tasks', createTask);
    router.post('/user/:userId/task/:taskId', updateTask);

    this.app.use(router);
  };
}

export default new App().app;
