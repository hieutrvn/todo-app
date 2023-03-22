import React, { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { ButtonIcon } from '../../../../components/Button/Button';
import { ITodoItem } from '../../../../interfaces/interfaces';
import { Form } from '../Form/Form';
import styles from './modal.module.scss';

interface Props {
  type: string
  modalOpen: boolean
  todo?: ITodoItem
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const TodoModal = (props: Props): JSX.Element => {
  const { type, modalOpen, setModalOpen, todo } = props;
  const [title, setTitle] = useState<string>('');
  const [deadline, setDeadline] = useState<string>('');

  useEffect(() => {
    if (type === 'update' && (todo != null)) {
      setTitle(todo.title);
      setDeadline(todo.deadline);
    } else {
      setTitle('');
      setDeadline('');
    }
  }, [type, todo, modalOpen]);

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
                            type={type}
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
