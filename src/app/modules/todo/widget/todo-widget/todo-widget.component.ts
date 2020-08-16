import { TodoCreateAction } from './../../store/todo/todo.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { TodoState } from './../../store/todo/todo.reducer';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss'],
})
export class TodoWidgetComponent implements OnInit {
  constructor(private store$: Store<TodoState>) {}

  ngOnInit(): void {}

  onCreate(name: string) {
    console.log(name);
    this.store$.dispatch(new TodoCreateAction({ name }));
  }
}
