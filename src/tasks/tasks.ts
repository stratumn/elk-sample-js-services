import { Handler } from 'express';

export const getUserTasks: Handler = async (req, res) => {
  console.info('get user tasks request');
  res.json('ok');
};
