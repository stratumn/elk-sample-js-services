import { Handler } from 'express';
import { UserService } from './service';

export const createUser: Handler = async (req, res) => {
  console.info('create user request');
  const { name } = req.body;

  await preprocessUser();

  const user = await new UserService().createUser(name);
  res.json(user);
};

const preprocessUser = async () => {
  console.info('pre-processing user...');
  const timer = 100 * Math.random();
  await new Promise(resolve => setTimeout(resolve, timer));
};
