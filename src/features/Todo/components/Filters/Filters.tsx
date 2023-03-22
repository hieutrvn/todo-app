import React, { useEffect, useState } from 'react';
import { SelectedButton } from '../../../../components/Button/Button';
import { ITodoItem } from '../../../../interfaces/interfaces';
import { updateFilterStatus } from '../../contexts/actions';
import { FILTERS } from '../../contexts/constants';
import { useTodoContext } from '../../contexts/TodoContext';
import styles from './filter.module.scss';

interface Props {
  filterList: ITodoItem[]
  setFilterList: React.Dispatch<React.SetStateAction<ITodoItem[]>>
}

export const Filters = (props: Props): JSX.Element => {
  const { filterList, setFilterList } = props;
  const { state, dispatch } = useTodoContext();
  const { todos, filter } = state;
  const [count, setCount] = useState<string>('');

  const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch(updateFilterStatus(e.target.value));
  };

  useEffect(() => {
    switch (filter) {
      case 'Active':
        setFilterList(todos.filter((item) => !item.isComplete));
        break;
      case 'Completed':
        setFilterList(todos.filter((item) => item.isComplete));
        break;
      default:
        setFilterList(todos);
    }
    const itemCompleted = todos.filter((item) => !item.isComplete);
    setCount(itemCompleted.length.toString());
  }, [filter, todos]);

  return (
        <>
            <SelectedButton onChange={handleChangeFilter} >
                {
                    FILTERS.map((filter) => {
                      return (
                            <option key={filter.id}>{filter.option}</option>
                      );
                    })
                }
            </SelectedButton>
            <div className={styles.filter}>
                {filter === 'Completed'
                  ? (<>{filterList.length} Completed Items / {todos.length} Items</>)
                  : (<>{count} Active Items / {todos.length} Items</>)}
            </div>
        </>
  );
};
