import { List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
// import { FULFILLED } from 'redux-promise-middleware';
import { addTodo } from 'actions';

let id = -1;

export const initialTodosState = List([Map({ id: 0, name: 'Learn React', completed: false })]);

const todos = handleActions(
  {
    [addTodo]: (state, action) => {
      id -= 1;

      return state.push(Map({ id, ...action.payload, completed: false  }));
    },
    // [removeProduct]: (state, { payload }) => state.remove(state.findIndex(p => p.get('id') === payload)),
    // [`${fetchProducts}_${FULFILLED}`]: (state, { payload: { data } }) => fromJS(data),
  },
  initialTodosState,
);

export default todos;
