import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from './../../models/todo';

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.scss'],
})
export class TodoListUiComponent implements OnInit {
  @Input()
  todoList: Todo[] = [];

  @Output()
  edit = new EventEmitter<{ id: number; name: string }>();

  @Output()
  toggle = new EventEmitter<number>();

  @Output()
  delete = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onToggle(id: number): void {
    this.toggle.emit(id);
  }

  onEdit(id: number, name: string): void {
    this.edit.emit({ id, name });
  }

  onDelete(id: number): void {
    this.delete.emit(id);
  }
}
