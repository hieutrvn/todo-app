import React from 'react';
import { toast } from 'react-hot-toast';
import Button from '../../../../components/Button/Button';
import { DatePicker } from '../../../../components/DatePicker/DatePicker';
import { TextField } from '../../../../components/TextField/TextField';
import { postTodoAPI, updateTodoAPI } from '../../api/api';
import { addTodo, updateTodo } from '../../contexts/actions';
import { useTodoContext } from '../../contexts/TodoContext';
import styles from './form.module.scss';
import { ITodoItem } from '../../../../interfaces/interfaces';

interface Props {
  type: string
  title: string
  deadline: string
  todo?: ITodoItem
  setTitle: React.Dispatch<React.SetStateAction<string>>
  setDeadline: React.Dispatch<React.SetStateAction<string>>
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Form = (props: Props): JSX.Element => {
  const { type, title, deadline, todo, setModalOpen, setTitle, setDeadline } = props;
  const { state, dispatch } = useTodoContext();
  const { todos } = state;

  const handleSetModal = (): void => {
    setModalOpen(false);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.type === 'text') {
      setTitle(e.target.value);
    } else if (e.target.type === 'datetime-local') {
      setDeadline(e.target.value);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    if (title === '') {
      toast.error('Please enter a title');
    } else if (deadline === '') {
      toast.error('Please enter a date finish');
    } else {
      if (type === 'add') {
        postTodoAPI(title, deadline)
          .then(res => dispatch(addTodo(res)))
          .catch(err => console.error(err));
        toast.success('Task Added Successfully');
      }
      if (type === 'update') {
        const editedTodo = todos.filter((item) => item.id === todo?.id)[0];
        if (editedTodo.title !== title || editedTodo.deadline !== deadline) {
          editedTodo.title = title;
          editedTodo.deadline = deadline;
          updateTodoAPI(editedTodo)
            .then(res => dispatch(updateTodo(res)))
            .catch(err => console.error(err));
          toast.success('Task Updated Successfully');
        } else {
          toast.error('No changes made');
          return;
        }
      }
      setModalOpen(false);
    }
  };

  return (
        <form className={styles.form}>
            <h1 className={styles.formTitle}>{type === 'update' ? 'Update' : 'Add'} Task</h1>
            <TextField
                type='text'
                placeHolder='Enter title...'
                id='title'
                value={title}
                onChange={handleChangeInput}
            >
                Title
            </TextField>
            <DatePicker
                type='datetime-local'
                id='date_pick'
                value={deadline}
                onChange={handleChangeInput}
            >
                Date Finish
            </DatePicker>
            <label>
                <div className={styles.buttonContainer}>
                    <Button type='submit' variant='primary' onClick={handleSubmit}>{type === 'update' ? 'Update' : 'Add'} Task</Button>
                    <Button type='button' variant='secondary' onClick={handleSetModal}>Cancel</Button>
                </div>
            </label>
        </form>
  );
};
