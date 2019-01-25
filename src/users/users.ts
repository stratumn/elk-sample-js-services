import { Handler } from 'express';
import { UserService } from './service';

export const getUsers: Handler = async (_, res) => {
  console.info('get users request');

  await checkAuthorization();

  const users = await new UserService().getUsers();
  res.json(users);
};

const checkAuthorization = async () => {
  console.info('checking authorization...');
  await new Promise(resolve => setTimeout(resolve, 42));
};
