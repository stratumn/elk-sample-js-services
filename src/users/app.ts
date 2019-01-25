import * as express from 'express';
import Router from 'express-promise-router';
import * as bodyParser from 'body-parser';

import { createUser } from './create';
import { getUser } from './user';
import { getUsers } from './users';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.configure();
  }

  private configure = () => {
    const router = Router();
    router.use(bodyParser.json());

    router.get('/user/:id', getUser);
    router.get('/users', getUsers);
    router.post('/users', createUser);

    this.app.use(router);
  };
}

export default new App().app;
