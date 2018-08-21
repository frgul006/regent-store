import { Component, OnDestroy } from '@angular/core';
import * as fromStore from './store';
import { ToDo } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'regent-store';

  store: fromStore.Store;
  todos: ToDo[];
  unsubscribe: Function;
  field: string;

  constructor() {
    const reducers = {
      todos: fromStore.reducer
    };

    this.store = new fromStore.Store(reducers);
    this.unsubscribe = this.store.subscribe(({ todos: state }) => (this.todos = state.todos));
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  onClick() {
    const payload = { label: this.field, complete: false };
    this.store.dispatch(new fromStore.AddTodo(payload));
    this.field = '';
  }
}
