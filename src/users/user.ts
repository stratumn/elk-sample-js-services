import { Handler } from 'express';
import { User } from './types';

export const getUser: Handler = async (req, res) => {
  console.info('get user request');
  res.json(new User(req.params.id, 'Eve'));
};
