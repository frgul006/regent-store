import { Component, OnInit } from '@angular/core';
import { ToDo } from './todo.model';
import { Store } from '@ngrx/store';
import { AddTodo } from './store/actions/todo.actions';
import { State, getTodos } from './store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'regent-store';

  todos$: Observable<ToDo[]>;
  field: string;

  constructor(private store: Store<State>) {
    this.todos$ = this.store.select(getTodos);
  }

  ngOnInit() {}

  onClick() {
    const newTodo = { label: this.field, complete: false };
    this.store.dispatch(new AddTodo(newTodo));
    this.field = '';
  }
}
