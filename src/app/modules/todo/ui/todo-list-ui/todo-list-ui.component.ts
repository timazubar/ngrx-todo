import { Component, OnInit, Input } from '@angular/core';

import { Todo } from './../../models/todo';

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.scss'],
})
export class TodoListUiComponent implements OnInit {
  @Input()
  todoList: Todo[] = [];

  constructor() {}

  ngOnInit(): void {}
}
