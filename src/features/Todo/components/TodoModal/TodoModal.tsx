import React, { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { ButtonIcon } from '../../../../components/Button/Button';
import { ITodoItem } from '../../../../interfaces/interfaces';
import { Form } from '../Form/Form';
import styles from './modal.module.scss';

interface TodoModalProps {
  modalOpen: boolean
  todo?: ITodoItem
  updateTask: boolean
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const TodoModal = (props: TodoModalProps): JSX.Element => {
  const { modalOpen, updateTask, setModalOpen, todo } = props;
  const [title, setTitle] = useState<string>('');
  const [deadline, setDeadline] = useState<string>('');

  useEffect(() => {
    if ((todo != null)) {
      setTitle(todo.title);
      setDeadline(todo.deadline);
    } else {
      setTitle('');
      setDeadline('');
    }
  }, [todo, modalOpen]);

  const handleSetModal = (): void => {
    setModalOpen?.(false);
  };
  return (
        <>{
            modalOpen && (
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <ButtonIcon style='close' onClick={handleSetModal}> <GrClose /></ButtonIcon>
                        <Form
                            updateTask={updateTask}
                            title={title}
                            deadline={deadline}
                            setTitle={setTitle}
                            setDeadline={setDeadline}
                            setModalOpen={handleSetModal}
                            todo={todo}
                        />
                    </div>
                </div>
            )
        }</>
  );
};
