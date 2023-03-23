import React, { useState } from 'react';
import { format } from 'date-fns';
import styles from './todoItem.module.scss';
import { MdDelete, MdEdit } from 'react-icons/md';
import { ITodoItem } from '../../../../interfaces/interfaces';
import { useTodoContext } from '../../contexts/TodoContext';
import { TodoModal } from '../TodoModal/TodoModal';
import { deleteTodoAPI, toggleTodoAPI } from '../../api/api';
import { deleteTodo, toggleTodo } from '../../contexts/actions';
import { CheckButton } from '../../../../components/CheckButton/CheckButton';
import { toast } from 'react-hot-toast';
import { ButtonIcon } from '../../../../components/Button/Button';
interface TodoItemProps {
  todoTitle: string
  todoDeadline: string
  checked: boolean
  todo: ITodoItem
}

export const TodoItem = (props: TodoItemProps): JSX.Element => {
  const { todoTitle, todoDeadline, checked, todo } = props;
  const { dispatch } = useTodoContext();
  const [updateModalOpen, setUpdateModalOpen] = useState<boolean>(false);

  const handleUpdate = (): void => {
    setUpdateModalOpen(true);
  };

  const handleChecked = (): void => {
    toggleTodoAPI(todo)
      .then(res => dispatch(toggleTodo(res)))
      .catch(err => console.error(err));
  };

  const handleDelete = (): void => {
    deleteTodoAPI(todo.id)
      .then(res => {
        dispatch(deleteTodo(res.id));
        toast.success('Task Deleted Successfully');
      })
      .catch(err => {
        console.error(err);
        toast.error('Task Delete Failed');
      });
  };

  return (
        <>
            <div className={styles.item}>
                <div className={styles.todoDetails}>
                    <CheckButton checked={checked} onClick={handleChecked} />
                    <div className={styles.texts}>
                        <p className={checked
                          ? `${styles.todoText} ${styles['todoText--completed']}`
                          : `${styles.todoText}`
                        }>
                            {todoTitle}
                        </p>
                        <p className={styles.time}>
                            Deadline: {format(new Date(todoDeadline), 'p, dd/MM/yyyy')}
                        </p>
                    </div>
                </div>
                <div className={styles.todoActions}>
                    <ButtonIcon style='icon' onClick={handleUpdate} ><MdEdit /></ButtonIcon>
                    <ButtonIcon style='icon' onClick={handleDelete}><MdDelete /></ButtonIcon>
                </div>
            </div>
            <TodoModal
                type='update'
                modalOpen={updateModalOpen}
                setModalOpen={setUpdateModalOpen}
                todo={todo}
            />
        </>
  );
};
