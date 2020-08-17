import { Action } from '@ngrx/store';

export enum todoActionsType {
  create = '[Todo] create todo item',
  toggle = '[Todo] toggle todo item',
  edit = '[Todo] edit todo item',
  delete = '[Todo] delete todo item',
}

// In [] there is a module name

export class TodoCreateAction implements Action {
  readonly type = todoActionsType.create;
  constructor(public payload: { name: string }) {}
}

export class TodoToggleAction implements Action {
  readonly type = todoActionsType.toggle;
  constructor(public payload: { id: number }) {}
}

export class TodoEditAction implements Action {
  readonly type = todoActionsType.edit;
  constructor(public payload: { id: number; name: string }) {}
}

export class TodoDeleteAction implements Action {
  readonly type = todoActionsType.delete;
  constructor(public payload: { id: number }) {}
}

export type TodoActions =
  | TodoCreateAction
  | TodoToggleAction
  | TodoEditAction
  | TodoDeleteAction;
