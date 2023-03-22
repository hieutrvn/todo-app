import { ITodoItem, TodoActions } from '../../../interfaces/interfaces';
import { ACTION } from './constants';

export const getTodo = (todos: ITodoItem[]): TodoActions => ({
  type: ACTION.GET_TODO,
  payload: todos
});

export const addTodo = (todo: ITodoItem): TodoActions => ({
  type: ACTION.ADD_TODO,
  payload: todo
});

export const updateTodo = (todo: ITodoItem): TodoActions => ({
  type: ACTION.UPDATE_TODO,
  payload: todo
});
export const deleteTodo = (id: string): TodoActions => ({
  type: ACTION.DELETE_TODO,
  payload: id
});

export const toggleTodo = (todo: ITodoItem): TodoActions => ({
  type: ACTION.TOGGLE_TODO,
  payload: todo
});

export const updateFilterStatus = (status: string): TodoActions => ({
  type: ACTION.UPDATE_FILTER,
  payload: status
});
