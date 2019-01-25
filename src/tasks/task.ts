import { Handler } from 'express';
import { Task } from './types';

export const updateTask: Handler = async (req, res) => {
  const { userId, taskId } = req.params;
  console.info(`update task ${taskId} (user ${userId}) request`);

  const { name, done } = req.body;
  res.json(new Task(taskId, name, done));
};
