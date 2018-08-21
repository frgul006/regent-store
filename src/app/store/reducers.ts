import * as fromActions from './actions';

export class ToDo {
  label: string;
  complete: boolean;
}

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
