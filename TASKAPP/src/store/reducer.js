import {ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_TODO} from './actionType';

const initialState = {
  todos: [],
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log('action from reducer', action);
      return {
        ...state, //copying the original state
        todos: [...state.todos, action.payload], //new todos array
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        }),
      };
    case DELETE_TODO:
      const filteredTodos = state.todos.filter(
        todo => todo.id !== action.payload,
      );
      return {
        ...state,
        todos: filteredTodos,
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};
