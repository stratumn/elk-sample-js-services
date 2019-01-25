import { Handler } from 'express';
import { User } from './types';

export const createUser: Handler = async (req, res) => {
  console.info('create user request');
  const { name } = req.body;
  res.json(new User('42', name));
};
