import { Todo } from './../../models/todo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item-edit-ui',
  templateUrl: './todo-item-edit-ui.component.html',
  styleUrls: ['./todo-item-edit-ui.component.scss'],
})
export class TodoItemEditUiComponent implements OnInit {
  name = '';

  @Input()
  todo: Todo;

  @Output()
  edit = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.name = this.todo.name;
  }

  onEdit(): void {
    if (this.name) {
      this.edit.emit(this.name);
    }
  }

  onCancel(): void {
    this.name = this.todo.name;
  }
}
