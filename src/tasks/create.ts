import { Handler } from 'express';
import { Task } from './types';

export const createTask: Handler = async (req, res) => {
  const { id: userId } = req.params;
  console.info(`create task request for user ${userId}`);

  const { name } = req.body;
  res.json(new Task('42', name, false));
};
