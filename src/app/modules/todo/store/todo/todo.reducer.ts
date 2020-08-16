import { TodoActions, todoActionsType } from './todo.actions';
import { Todo } from './../../models/todo';

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  idInc: number;
  todoList: Todo[];
}

const initialState = {
  idInc: 1,
  todoList: [],
};

export const todoReducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case todoActionsType.create:
      return {
        ...state,
        idInc: state.idInc + 1,
        todoList: {
          ...state.todoList,
          id: state.idInc,
          name: action.payload.name,
          completed: false,
        },
      };

    default:
      return state;
  }
  return state;
};
