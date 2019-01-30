import { Handler } from 'express';
import { agent } from './apm';
import { TaskService } from './service';

export const getUserTasks: Handler = async (req, res) => {
  const span = agent.startSpan('getUserTasks', 'app.request');

  const { id: userId } = req.params;
  agent.setUserContext({ id: userId });
  console.info(`get user ${userId} tasks request`);

  await checkAuthorization();

  const tasks = await new TaskService().getUserTasks(userId);
  res.json(tasks);

  span.end();
};

const checkAuthorization = async () => {
  const span = agent.startSpan('checkAuthorization', 'app.processing');

  console.info('checking authorization...');
  await new Promise(resolve => setTimeout(resolve, 42));

  span.end();
};
