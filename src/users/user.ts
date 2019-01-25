import { Handler } from 'express';
import { UserService } from './service';

export const getUser: Handler = async (req, res) => {
  console.info('get user request');

  await checkAuthorization();

  const user = await new UserService().getUser(req.params.id);
  res.json(user);
};

const checkAuthorization = async () => {
  console.info('checking authorization...');
  await new Promise(resolve => setTimeout(resolve, 42));
};
