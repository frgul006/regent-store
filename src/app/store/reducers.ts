import * as fromActions from './actions';
import { ToDo } from '../todo.model';

export class State {
  loaded: boolean;
  loading: boolean;
  todos: ToDo[];
}

export const initialState = {
  loaded: false,
  loading: false,
  todos: [{ label: 'Eat pizza', complete: true }]
} as State;

export function reducer(state = initialState, action) {
  switch (action.type) {
    case fromActions.ADD_TODO: {
      const todo = action.payload;
      const todos = [...state.todos, todo];
      return {
        ...state,
        todos
      };
    }
  }

  return state;
}
