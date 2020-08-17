import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from './../../models/todo';

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.scss'],
})
export class TodoListUiComponent implements OnInit {
  editIds: number[] = [];

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

  onEditMode(id: number): void {
    this.editIds.push(id);
  }

  onToggle(id: number): void {
    this.toggle.emit(id);
  }

  onEdit(id: number, name: string): void {
    this.editIds = this.editIds.filter((item) => item !== id);
    this.edit.emit({ id, name });
  }

  onDelete(id: number): void {
    this.delete.emit(id);
  }
}
