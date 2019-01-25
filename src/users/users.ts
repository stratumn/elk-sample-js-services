import { Handler } from 'express';
import { User } from './types';

export const getUsers: Handler = async (_, res) => {
  console.info('get users request');
  const users = [new User('1', 'alice'), new User('2', 'bob')];
  res.json(users);
};
