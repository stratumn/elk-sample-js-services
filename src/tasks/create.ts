import { Handler } from 'express';
import { agent } from './apm';
import { TaskService } from './service';

export const createTask: Handler = async (req, res) => {
  const span = agent.startSpan('createTask', 'app.request');

  const { id: userId } = req.params;
  agent.setUserContext({ id: userId });
  console.info(`create task request for user ${userId}`);

  await preprocessTask();

  const { name } = req.body;
  const task = await new TaskService().createTask(userId, name);
  span.setTag('taskId', task.id);

  res.json(task);

  span.end();
};

const preprocessTask = async () => {
  const span = agent.startSpan('preprocessTask', 'app.processing');

  console.info('pre-processing task...');
  const timer = 100 * Math.random();
  await new Promise(resolve => setTimeout(resolve, timer));

  span.end();
};
