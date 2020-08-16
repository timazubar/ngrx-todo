import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { TODO_REDUCER_NODE, todoReducer } from './store/todo/todo.reducer';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { TodoCreateFormUiComponent } from './ui/todo-create-form-ui/todo-create-form-ui.component';
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component';

@NgModule({
  declarations: [
    TodoPageComponent,
    TodoCreateFormUiComponent,
    TodoWidgetComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoPageComponent,
      },
    ]),
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
  ],
})
export class TodoModule {}
