import { createSelector } from 'reselect';

const getTodos = createSelector(state => state.get('todos'), todos => todos);

export default getTodos;
