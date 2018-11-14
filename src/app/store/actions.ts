import { ToDo } from '../todo.model';

// Constants
export const ADD_TODO = '[Todos] Add Todo';

// Action Creators
export class AddTodo {
  readonly type = ADD_TODO;
  constructor(readonly payload: ToDo) {}
}
