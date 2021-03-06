import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const todosReducer = (state = {}, action) => {
  let nextState = {};
  switch(action.type){
    case RECEIVE_TODOS:
      action.todos.forEach( todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    case RECEIVE_TODO:
      const newTodo = { [action.todo.id]: action.todo };
      return merge({}, state, newTodo);
      // new state => {1: todo1, 2:todo2} vs {todos: {1: todo1, 2: todo2}}
    case REMOVE_TODO:
      nextState = merge({}, state);
      delete nextState[action.todo.id];
      return nextState;
    default:
      return state;
  }
};

export default todosReducer;

// const initialState = {
//   1: {
//     id: 1,
//     title: 'wash car',
//     body: 'with soap',
//     done: false
//   },
//   2: {
//     id: 2,
//     title: 'wash dog',
//     body: 'with shampoo',
//     done: true
//   },
// };
