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
    this.app.use((_, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
      next();
    });

    const router = Router();
    router.use(bodyParser.json());

    router.get('/user/:id/tasks', getUserTasks);
    router.post('/user/:id/tasks', createTask);
    router.post('/user/:userId/task/:taskId', updateTask);

    this.app.use(router);
  };
}

export default new App().app;
