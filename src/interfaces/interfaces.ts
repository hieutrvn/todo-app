export interface ITodoItem {
  id: string
  title: string
  deadline: string
  isComplete: boolean
}

export interface TodoState {
  todos: ITodoItem[]
  filter: string
}

export interface GetAllTodo {
  type: string
  payload: ITodoItem[]
}

export interface AddTodo {
  type: string
  payload: ITodoItem
}

export interface UpdateTodo {
  type: string
  payload: ITodoItem
}

export interface DeleteTodo {
  type: string
  payload: string
}

export interface UpdateFilter {
  type: string
  payload: string
}

export interface ToggleTodo {
  type: string
  payload: ITodoItem
}

export interface ContextModel {
  state: TodoState
  dispatch: React.Dispatch<TodoActions>
}

export type TodoActions =
  | TodoState
  | GetAllTodo
  | UpdateTodo
  | DeleteTodo
  | AddTodo
  | ToggleTodo
  | UpdateFilter;
