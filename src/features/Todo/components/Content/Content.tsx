import React, { useEffect } from 'react';
import { ITodoItem } from '../../../../interfaces/interfaces';
import { getTodosAPI } from '../../api/api';
import { getTodo } from '../../contexts/actions';
import { useTodoContext } from '../../contexts/TodoContext';
import { TodoItem } from '../TodoItem/TodoItem';
import styles from './content.module.scss';

interface Props {
  filterList: ITodoItem[]
}

export const Content = (props: Props): JSX.Element => {
  const { filterList } = props;
  const { state, dispatch } = useTodoContext();
  const { todos } = state;

  useEffect(() => {
    getTodosAPI()
      .then(res => {
        dispatch(getTodo(res));
      })
      .catch(err => console.error(err));
  }, []);

  return (
        <div className={styles.content__wrapper}>
            {todos.length > 0
              ? (
                  filterList.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todoTitle={todo.title}
                            todoDeadline={todo.deadline}
                            checked={todo.isComplete}
                            todo={todo}
                        />
                  ))
                )
              : (
                    <p className={styles.emptyText}>
                        No Todo
                    </p>
                )}
        </div>
  );
};
