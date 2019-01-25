import { Handler } from 'express';
import { Task } from './types';
import { TaskService } from './service';

export const updateTask: Handler = async (req, res) => {
  const { userId, taskId } = req.params;
  console.info(`update task ${taskId} (user ${userId}) request`);

  await checkAuthorization();

  const { name, done } = req.body;
  const task = await new TaskService().updateTask(
    userId,
    new Task(taskId, name, done)
  );
  res.json(task);
};

const checkAuthorization = async () => {
  console.info('checking authorization...');
  await new Promise(resolve => setTimeout(resolve, 42));
};
