import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as todoReducer from './todo.reducer';

export interface State {
  todos: todoReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  todos: todoReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const getTodosState = createFeatureSelector<todoReducer.State>('todos');

// USER INFO

export const getTodos = createSelector(
  getTodosState,
  todoReducer.getData
);
