import { Action } from '@ngrx/store';
import { ToDo } from '../../todo.model';
import * as todoActions from '../actions/todo.actions';

export interface State {
  data: ToDo[];
}

export const initialState: State = {
  data: [{ label: 'Eat pizza', complete: true }]
};

export function reducer(
  state = initialState,
  action: todoActions.TodoActions
): State {
  switch (action.type) {
    case todoActions.TodoActionTypes.AddTodo: {
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    }
    default:
      return state;
  }
}

export const getData = (state: State) => state.data;
