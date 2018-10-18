import {
  compose, withState, withHandlers, setDisplayName, mapProps,
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from 'actions';
import { getTodos } from 'selectors';
import Todo from './Todo';

export const enhance = compose(
  setDisplayName('TodoContainer'),
  connect(
    state => ({
      todos: getTodos(state),
    }),
    dispatch => bindActionCreators(
      {
        dispatchAddTodo: addTodo,
        dispatchRemoveTodo: removeTodo,
      },
      dispatch,
    ),
  ),
  withState('name', 'setName', ''),
  withHandlers({
    // 1st function param -> props, second function param -> event
    changeName: ({ setName }) => (event) => {
      setName(event.currentTarget.value);
    },
    handleAddTodo: ({ name, dispatchAddTodo, setName }) => (event) => {
      event.preventDefault();
      dispatchAddTodo(name);
      setName('');
    },
    handleRemoveTodo: ({ dispatchRemoveTodo }) => (id) => {
      dispatchRemoveTodo(id);
    },
  }),
  mapProps(props => ({
    ...props,
    todos: props.todos.toJS(),
  })),
);

export default enhance(Todo);
