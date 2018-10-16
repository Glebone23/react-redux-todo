import { createAction } from 'redux-actions';

const removeTodo = createAction('REMOVE_TODO', id => id);

export default removeTodo;
