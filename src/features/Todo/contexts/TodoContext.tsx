import React, { useContext } from 'react';
import { ContextModel } from '../../../interfaces/interfaces';

const TodoContext = React.createContext<ContextModel | null>(null);

export const useTodoContext = (): ContextModel => {
  const context = useContext(TodoContext);

  return context as ContextModel;
};

export default TodoContext;
