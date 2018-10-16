import {
  compose, withState, withHandlers, setDisplayName, mapProps,
} from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from 'actions';
import { getTodos } from 'selectors';
import ToDo from './ToDo';

export const enhance = compose(
  setDisplayName('ToDoContainer'),
  connect(
    state => ({
      todos: getTodos(state),
    }),
    dispatch => bindActionCreators(
      {
        dispatchAddProduct: addTodo,
      },
      dispatch,
    ),
  ),
  withState('name', 'setName', ''),
  withHandlers({
    changeName: ({ setName }) => (event) => {
      setName(event.currentTarget.value);
    },
    handleAddProduct: ({ name, dispatchAddProduct }) => () => {
      dispatchAddProduct(name);
    },
  }),
  mapProps(props => ({
    ...props,
    todos: props.todos.toJS(),
  })),
);

export default enhance(ToDo);
