import { ITodoItem, TodoState, TodoActions } from '../../../interfaces/interfaces';
import { ACTION } from './constants';

export const initialState: TodoState = {
  todos: [],
  filter: 'All'
};

export const reducer = (state: TodoState, action: TodoActions): TodoState => {
  const payload = 'payload' in action && action.payload;
  switch ('type' in action && action.type) {
    case ACTION.GET_TODO:
      return {
        ...state,
        todos: payload as ITodoItem[]
      };

    case ACTION.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload as ITodoItem]
      };

    case ACTION.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== payload)
      };

    case ACTION.UPDATE_TODO: {
      const newItem = payload as ITodoItem;
      const newTodo = state.todos.map((todo) => {
        return todo.id === newItem.id
          ? { ...todo, title: newItem.title, deadline: newItem.deadline }
          : todo;
      });
      return {
        ...state,
        todos: newTodo
      };
    }

    case ACTION.TOGGLE_TODO: {
      const newItem = payload as ITodoItem;
      const newTodo = state.todos.map((todo) => {
        return todo.id === newItem.id
          ? { ...todo, isComplete: !todo.isComplete }
          : todo;
      });
      return {
        ...state,
        todos: newTodo
      };
    }

    case ACTION.UPDATE_FILTER: {
      return {
        ...state,
        filter: payload as string
      };
    }

    default:
      throw new Error('Invalid Action');
  }
};
