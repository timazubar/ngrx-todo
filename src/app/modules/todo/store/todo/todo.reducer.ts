import { TodoActions, todoActionsType } from './todo.actions';
import { Todo } from './../../models/todo';

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  idInc: number;
  todoList: Todo[];
}

const initialState: TodoState = {
  idInc: 1,
  todoList: [],
};

export const todoReducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case todoActionsType.create:
      return {
        ...state,
        idInc: state.idInc + 1,
        todoList: [
          ...state.todoList,
          {
            id: state.idInc,
            name: action.payload.name,
            completed: false,
          },
        ],
      };
    case todoActionsType.toggle:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo
        ),
      };

    case todoActionsType.edit:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                name: action.payload.name,
              }
            : todo
        ),
      };

    case todoActionsType.delete:
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };

    case todoActionsType.load:
      return {
        ...action.payload.state,
      };

    default:
      return state;
  }
};
