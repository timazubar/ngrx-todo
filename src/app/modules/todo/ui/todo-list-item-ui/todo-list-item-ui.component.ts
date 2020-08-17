import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from './../../models/todo';

@Component({
  selector: 'app-todo-list-item-ui',
  templateUrl: './todo-list-item-ui.component.html',
  styleUrls: ['./todo-list-item-ui.component.scss'],
})
export class TodoListItemUiComponent implements OnInit {
  @Input()
  todo: Todo;

  @Output()
  edit = new EventEmitter<void>();

  @Output()
  delete = new EventEmitter<void>();

  @Output()
  toggle = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onToggle(event): void {
    event.preventDefault();
    this.toggle.emit();
  }

  onEdit(): void {
    this.edit.emit();
  }

  onDelete(): void {
    this.delete.emit();
  }
}
