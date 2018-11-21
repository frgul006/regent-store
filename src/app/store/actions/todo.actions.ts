import { Action } from '@ngrx/store';
import { ToDo } from '../../todo.model';

export enum TodoActionTypes {
  AddTodo = '[Todo] Add Todo'
}

export class AddTodo implements Action {
  constructor(readonly payload: ToDo) {}
  readonly type = TodoActionTypes.AddTodo;
}

export type TodoActions = AddTodo;
