import { Handler } from 'express';

export const createUser: Handler = async (req, res) => {
  console.info('create user request');
  res.json('ok');
};
