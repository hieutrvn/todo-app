import React, { useReducer } from 'react';
import { initialState, reducer } from './reducer';
import TodoContext from './TodoContext';

interface Props {
  children: React.ReactNode | React.ReactElement
}

export const TodoProvider = (props: Props): JSX.Element => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
  );
};
