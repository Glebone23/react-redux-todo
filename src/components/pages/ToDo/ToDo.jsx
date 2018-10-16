import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from 'components/widgets/TodoItem';

const displayName = 'ToDo';

const propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};


export default function ToDo(props) {
  const { todos } = props;
  // console.log(props);
  return (
    <main>
      {todos.map(todo => (
        <TodoItem key={todo.id} name={todo.name} />
      ))}
    </main>
  );
}

ToDo.displayName = displayName;
ToDo.propTypes = propTypes;
