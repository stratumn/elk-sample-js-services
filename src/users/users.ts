import { Handler } from 'express';

export const getUsers: Handler = async (req, res) => {
  console.info('get users request');
  res.json('ok');
};
