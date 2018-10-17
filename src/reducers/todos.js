import { List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import {
  addTodo, removeTodo,
} from 'actions';
// import { FULFILLED } from 'redux-promise-middleware';

let id = -1;

export const initialTodosState = List([
  Map({ id: 0, name: 'Learn React', completed: false }),
  Map({ id: 1, name: 'Learn Redux', completed: false }),
]);

const todos = handleActions(
  {
    [addTodo]: (state, action) => {
      id -= 1;

      return state.push(Map({ id, ...action.payload, completed: false }));
    },
    [removeTodo]: (state, { payload }) => state.remove(state.findIndex(TodoItem => TodoItem.get('id') === payload)),
    // [`${fetchProducts}_${FULFILLED}`]: (state, { payload: { data } }) => fromJS(data),
  },
  initialTodosState,
);

export default todos;
