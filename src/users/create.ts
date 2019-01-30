import { Handler } from 'express';
import { agent } from './apm';
import { UserService } from './service';

export const createUser: Handler = async (req, res) => {
  const span = agent.startSpan('createUser', 'app.request');
  console.info('create user request');

  const { name } = req.body;

  await preprocessUser();

  const user = await new UserService().createUser(name);
  agent.setUserContext({ id: user.id.toString(), username: user.name });

  res.json(user);

  span.end();
};

const preprocessUser = async () => {
  const span = agent.startSpan('preprocessUser', 'app.processing');
  console.info('pre-processing user...');

  const timer = 100 * Math.random();
  await new Promise(resolve => setTimeout(resolve, timer));

  span.end();
};
