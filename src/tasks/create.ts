import { Handler } from 'express';
import { TaskService } from './service';

export const createTask: Handler = async (req, res) => {
  const { id: userId } = req.params;
  console.info(`create task request for user ${userId}`);

  await preprocessTask();

  const { name } = req.body;
  const task = await new TaskService().createTask(userId, name);
  res.json(task);
};

const preprocessTask = async () => {
  console.info('pre-processing task...');
  const timer = 100 * Math.random();
  await new Promise(resolve => setTimeout(resolve, timer));
};
