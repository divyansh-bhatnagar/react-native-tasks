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
    // case DELETE_TODO:
    //   return {
    //     ...state,
    //     todos: state.todos.filter(todo => todo.id !== action.payload), // returns a new filtered todos array
    //     // todos: handleDelete(action.payload, state.todos)
    //   };
    case DELETE_TODO:
      const filteredTodos = state.todos.filter(
        todo => todo.id !== action.payload,
      );
      return {
        ...state,
        todos: filteredTodos,
      };

    // case TOGGLE_TODO:
    //   return state.map(todo => {
    //     if (todo.id === action.id) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   });

    case TOGGLE_TODO: {
      const index = state.todos.findIndex(todo => todo.id !== action.payload); //finding index of the item
      const newArray = [...state.todos]; //making a new array
      newArray[index].completed = true; //changing value in the new array
      return {
        ...state, //copying the orignal state
        todos: newArray, //reassingning todos to new array
      };
    }

    default:
      return state;
  }
};
