import axios from 'axios';
import { User } from './types';

/**
 * Backend user service client.
 * Only the backend service can interact with the DB.
 */
export class UserService {
  readonly endpoint: string = 'http://localhost:4001';

  getUsers = async (): Promise<User[]> => {
    const response = await axios.get<User[]>(`${this.endpoint}/users`);
    return response.data;
  };

  getUser = async (id: string): Promise<User> => {
    const response = await axios.get<User>(`${this.endpoint}/user/${id}`);
    return response.data;
  };

  createUser = async (name: string): Promise<User> => {
    const response = await axios.post<User>(`${this.endpoint}/users`, {
      name
    });
    return response.data;
  };
}
