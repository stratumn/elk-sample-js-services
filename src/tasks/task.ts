import { Handler } from 'express';

export const updateTask: Handler = async (req, res) => {
  console.info('update task request');
  res.json('ok');
};
