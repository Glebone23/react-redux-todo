import { createAction } from 'redux-actions';

const addTodo = createAction('ADD_TODO', name => ({ name }));

export default addTodo;
