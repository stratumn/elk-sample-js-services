import axios from 'axios';
import { Task } from './types';

/**
 * Backend task service client.
 * Only the backend service can interact with the DB.
 */
export class TaskService {
  readonly endpoint: string = 'http://localhost:4002';

  getUserTasks = async (userId: string): Promise<Task[]> => {
    const response = await axios.get<Task[]>(
      `${this.endpoint}/user/${userId}/tasks`
    );
    return response.data;
  };

  createTask = async (userId: string, name: string): Promise<Task> => {
    const response = await axios.post<Task>(
      `${this.endpoint}/user/${userId}/tasks`,
      {
        name
      }
    );
    return response.data;
  };

  updateTask = async (userId: string, task: Task): Promise<Task> => {
    const response = await axios.post<Task>(
      `${this.endpoint}/user/${userId}/task/${task.id}`,
      {
        name: task.name,
        done: task.done
      }
    );
    return response.data;
  };
}
