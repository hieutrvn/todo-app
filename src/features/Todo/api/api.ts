import axios from 'axios';
import { ITodoItem } from '../../../interfaces/interfaces';

export const axiosClient = axios.create({
  baseURL: 'https://64113a532e340b45b13f5231.mockapi.io',
  headers: { 'X-Custom-Header': 'foobar' }
});

export const getTodosAPI = async (): Promise<ITodoItem[]> => {
  try {
    const response = await axiosClient.get('/todos');
    return response.data;
  } catch (error) {
    throw new Error('Failed to get data!');
  }
};

export const postTodoAPI = async (
  title: string,
  deadline: string,
  isComplete: boolean = false
): Promise<ITodoItem> => {
  try {
    const todo = { title, deadline, isComplete };
    const response = await axiosClient.post('/todos', todo);
    return response.data;
  } catch (error) {
    throw new Error('Failed to post data!');
  }
};

export const updateTodoAPI = async (todo: ITodoItem): Promise<ITodoItem> => {
  try {
    const response = await axiosClient.put(`/todos/${todo.id}`, todo);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update data!');
  }
};

export const deleteTodoAPI = async (id: string): Promise<ITodoItem> => {
  try {
    const response = await axiosClient.delete(`/todos/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete data!');
  }
};

export const toggleTodoAPI = async (todo: ITodoItem): Promise<ITodoItem> => {
  try {
    const status = { isComplete: !todo.isComplete };
    const response = await axiosClient.put(`/todos/${todo.id}`, status);
    return response.data;
  } catch (error) {
    throw new Error('Failed to put data!');
  }
};
