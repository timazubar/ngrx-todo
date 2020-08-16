import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-create-form-ui',
  templateUrl: './todo-create-form-ui.component.html',
  styleUrls: ['./todo-create-form-ui.component.scss'],
})
export class TodoCreateFormUiComponent implements OnInit {
  name = '';

  @Output()
  create = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onCreate(): void {
    if (this.name) {
      this.create.emit(this.name);
    }

    this.name = '';
  }
}
