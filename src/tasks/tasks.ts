import { Handler } from 'express';
import { Task } from './types';

export const getUserTasks: Handler = async (req, res) => {
  const { id: userId } = req.params;
  console.info(`get user ${userId} tasks request`);

  const tasks: Task[] = [];
  if (userId === '1') {
    tasks.push(
      new Task('1', 'Do the laundry', true),
      new Task('2', 'Do the dishes', false)
    );
  } else if (userId === '2') {
    tasks.push(
      new Task('3', 'Do the dishes', false),
      new Task('4', 'Do something with my life', false)
    );
  } else {
    tasks.push(new Task('5', 'Become a real user', false));
  }

  res.json(tasks);
};
