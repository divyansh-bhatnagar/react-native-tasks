import {ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_TODO} from './actionType';

const generateRandomNumber = () => {
  var randomNumber = Math.floor(Math.random() * 100000) + 1;
  //const randomNumber = () => parseInt(Date.now() * Math.random());
  return randomNumber;
};

export const addTodo = payload => {
  console.log('payload from action', payload);
  return {
    type: ADD_TODO,
    payload: {
      id: generateRandomNumber(),
     task: payload,
    },
  };
};
export const editTodo = payload => {
  return {
    type: EDIT_TODO,
    payload: payload,
  };
};
export const deleteTodo = payload => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};
export const toggleTodo = payload => {
  return {
    type: TOGGLE_TODO,
    payload: payload,
    check: true,
  };
};
