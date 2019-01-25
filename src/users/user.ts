import { Handler } from 'express';

export const getUser: Handler = async (req, res) => {
  console.info('get user request');
  res.json('ok');
};
