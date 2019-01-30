import { Handler } from 'express';
import { agent } from './apm';
import { Task } from './types';
import { TaskService } from './service';

export const updateTask: Handler = async (req, res) => {
  const span = agent.startSpan('updateTask', 'app.request');

  const { userId, taskId } = req.params;
  agent.setUserContext({ id: userId });
  span.setTag('taskId', taskId);
  console.info(`update task ${taskId} (user ${userId}) request`);

  await checkAuthorization();

  const { name, done } = req.body;
  const task = await new TaskService().updateTask(
    userId,
    new Task(taskId, name, done)
  );
  res.json(task);

  span.end();
};

const checkAuthorization = async () => {
  const span = agent.startSpan('checkAuthorization', 'app.processing');

  console.info('checking authorization...');
  await new Promise(resolve => setTimeout(resolve, 42));

  span.end();
};
