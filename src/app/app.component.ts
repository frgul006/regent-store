import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'regent-store';

  todos: { label: string; complete: boolean }[] = [{ label: 'Eat pizza', complete: true }];
  field: string;

  onClick() {
    const newTodo = { label: this.field, complete: false };
    this.todos.push(newTodo);
    this.field = '';
  }
}
