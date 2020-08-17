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
  delete = new EventEmitter<number>();

  @Output()
  toggle = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onToggle(event): void {
    event.preventDefault();
    this.toggle.emit();
  }

  onDelete(): void {
    this.delete.emit();
  }
}
