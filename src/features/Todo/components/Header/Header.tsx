import React from 'react';
import Button from '../../../../components/Button/Button';
import { ITodoItem } from '../../../../interfaces/interfaces';
import { Filters } from '../Filters/Filters';
import { TodoModal } from '../TodoModal/TodoModal';
import styles from './header.module.scss';

interface Props {
  filterList: ITodoItem[]
  modalOpen: boolean
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setFilterList: React.Dispatch<React.SetStateAction<ITodoItem[]>>
}

export const Header = (props: Props): JSX.Element => {
  const { filterList, setFilterList, modalOpen, setModalOpen } = props;

  return <div className={styles.appHeader}>
        <Filters filterList={filterList} setFilterList={setFilterList} />
        <Button type='button' variant='primary' onClick={() => setModalOpen(true)}>Create Task</Button>
        <TodoModal type='add' modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>;
};
