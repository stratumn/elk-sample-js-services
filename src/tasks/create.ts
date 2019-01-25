import { Handler } from 'express';

export const createTask: Handler = async (req, res) => {
  console.info('create task request');
  res.json('ok');
};
