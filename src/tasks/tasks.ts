import { Handler } from 'express';
import { TaskService } from './service';

export const getUserTasks: Handler = async (req, res) => {
  const { id: userId } = req.params;
  console.info(`get user ${userId} tasks request`);

  await checkAuthorization();

  const tasks = await new TaskService().getUserTasks(userId);
  res.json(tasks);
};

const checkAuthorization = async () => {
  console.info('checking authorization...');
  await new Promise(resolve => setTimeout(resolve, 42));
};
