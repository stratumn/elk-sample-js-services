import { Handler } from 'express';
import { agent } from './apm';
import { UserService } from './service';

export const getUsers: Handler = async (_, res) => {
  const span = agent.startSpan('getUsers', 'app.request');
  console.info('get users request');

  await checkAuthorization();

  const users = await new UserService().getUsers();
  res.json(users);

  span.end();
};

const checkAuthorization = async () => {
  const span = agent.startSpan('checkAuthorization', 'app.processing');
  console.info('checking authorization...');

  await new Promise(resolve => setTimeout(resolve, 42));

  span.end();
};
