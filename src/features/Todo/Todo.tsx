import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { ITodoItem } from '../../interfaces/interfaces';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';
import { useTodoContext } from './contexts/TodoContext';
import styles from './todo.module.scss';

export const Todo = (): JSX.Element => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [filterList, setFilterList] = useState<ITodoItem[]>([]);
  const { state } = useTodoContext();
  const { todos } = state;

  const formateDate = (date: string): Date => {
    return new Date(date);
  };

  useEffect(() => {
    const toastBox = setInterval(() => {
      const nowDate = new Date().getTime();
      const aHour = (1000 * 60 * 60);
      todos.forEach((todo) => {
        const todoDeadline = (formateDate(todo.deadline).getTime());
        if (!todo.isComplete && (todoDeadline - nowDate < 0)) {
          toast(`Task: ${todo.title}
                    Deadline: ${format(new Date(todo.deadline), 'p, dd/MM/yyyy')}
                    It has expired! Do it now
                    `, {
            icon: '😡',
            duration: 1000 * 8
          });
        } else if (!todo.isComplete && (todoDeadline - nowDate <= aHour)) {
          toast(`Task: ${todo.title}
                    Deadline: ${format(new Date(todo.deadline), 'p, dd/MM/yyyy')}
                    It's about to expire! Let's do it :3
                    `, {
            icon: '🥑',
            duration: 1000 * 8
          });
        }
      });
    }, 1000 * 60 * 2);
    return () => clearInterval(toastBox);
  }, [todos]);

  return <div className={styles.container}>
        <h1 className={styles.title}>TODO LIST</h1>
        <div className={styles.app__wrapper}>
            <Header
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                filterList={filterList}
                setFilterList={setFilterList}
            />
            <Content filterList={filterList} />
        </div>
    </div>;
};
