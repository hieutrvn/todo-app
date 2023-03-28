import React, { useEffect, useState } from 'react';
import { SelectedButton } from '../../../../components/Button/Button';
import { ITodoItem } from '../../../../interfaces/interfaces';
import { updateFilterStatus } from '../../contexts/actions';
import { FILTERS } from '../../contexts/constants';
import { useTodoContext } from '../../contexts/TodoContext';
import styles from './filter.module.scss';

interface FiltersProps {
  filterList: ITodoItem[]
  setFilterList: React.Dispatch<React.SetStateAction<ITodoItem[]>>
}

export const Filters = (props: FiltersProps): JSX.Element => {
  const { filterList, setFilterList } = props;
  const { state, dispatch } = useTodoContext();
  const { todos, filter } = state;
  const [count, setCount] = useState<Number>(0);

  const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch(updateFilterStatus(e.target.value));
  };

  useEffect(() => {
    switch (filter) {
      case FILTERS.Active:
        setFilterList(todos.filter((item) => !item.isComplete));
        break;
      case FILTERS.Completed:
        setFilterList(todos.filter((item) => item.isComplete));
        break;
      default:
        setFilterList(todos);
    }
    const itemCompleted = todos.filter((item) => !item.isComplete);
    setCount(itemCompleted.length);
  }, [filter, todos]);

  return (
        <>
            <SelectedButton onChange={handleChangeFilter} >
                <option value={FILTERS.All}>{FILTERS.All}</option>
                <option value={FILTERS.Active}>{FILTERS.Active}</option>
                <option value={FILTERS.Completed}>{FILTERS.Completed}</option>
            </SelectedButton>
            <div className={styles.filter}>
                {filter === 'Completed'
                  ? (<>{filterList.length} Completed Items / {todos.length} Items</>)
                  : (<>{count} Active Items / {todos.length} Items</>)}
            </div>
        </>
  );
};
