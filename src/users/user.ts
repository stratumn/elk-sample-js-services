import { Handler } from 'express';
import { agent } from './apm';
import { UserService } from './service';

export const getUser: Handler = async (req, res) => {
  const span = agent.startSpan('getUser', 'app.request');
  console.info('get user request');

  await checkAuthorization();

  agent.setUserContext({ id: req.params.id });
  const user = await new UserService().getUser(req.params.id);
  res.json(user);

  span.end();
};

const checkAuthorization = async () => {
  const span = agent.startSpan('checkAuthorization', 'app.processing');
  console.info('checking authorization...');

  await new Promise(resolve => setTimeout(resolve, 42));

  span.end();
};
