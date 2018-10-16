import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from 'components/widgets';

const displayName = 'ToDo';

const propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  handleRemoveTodo: PropTypes.func.isRequired,
};


export default function ToDo(props) {
  const { todos, handleRemoveTodo } = props;
  return (
    <main>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} onRemove={handleRemoveTodo} />
      ))}
    </main>
  );
}

ToDo.displayName = displayName;
ToDo.propTypes = propTypes;
