export enum ACTION {
  ADD_TODO = 'add_todo',
  UPDATE_TODO = 'edit_todo',
  DELETE_TODO = 'delete_todo',
  GET_TODO = 'get_todo',
  TOGGLE_TODO = 'toggle_todo',
  UPDATE_FILTER = 'filter_todo',
}

export const FILTERS = [
  {
    id: 1,
    option: 'All'
  },
  {
    id: 2,
    option: 'Active'
  },
  {
    id: 3,
    option: 'Completed'
  }
];
