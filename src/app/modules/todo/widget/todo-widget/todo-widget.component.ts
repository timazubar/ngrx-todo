import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { select } from '@ngrx/store';

import { Todo } from './../../models/todo';
import { TodoCreateAction } from './../../store/todo/todo.actions';
import { TodoState } from './../../store/todo/todo.reducer';
import { todoListSelector } from './../../store/todo/todo.selectors';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss'],
})
export class TodoWidgetComponent implements OnInit {
  todoList: Todo[] = [];
  todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector));

  constructor(private store$: Store<TodoState>) {}

  ngOnInit(): void {}

  onCreate(name: string): void {
    this.store$.dispatch(new TodoCreateAction({ name }));
  }
}
