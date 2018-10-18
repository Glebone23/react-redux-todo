import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from 'components/widgets';
import { Button } from 'components/controls';

const displayName = 'Todo';

const propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  handleRemoveTodo: PropTypes.func.isRequired,
  name: PropTypes.string,
  changeName: PropTypes.func.isRequired,
  handleAddTodo: PropTypes.func.isRequired,
};

const defaultProps = {
  name: '',
};

function Todo({
  todos, handleRemoveTodo, name, changeName, handleAddTodo,
}) {
  return (
    <main>
      <div>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} onRemove={handleRemoveTodo} />
        ))}
      </div>
      {/* How better to use AddTodoForm? w/ connect inside it or get props from parent component? */}
      <form onSubmit={handleAddTodo} style={{ marginTop: '1em' }}>
        <label htmlFor="name">
          Add todo:
          {' -> '}
          <input type="text" name="name" value={name} onChange={changeName} />
        </label>
        <Button type="submit">Save</Button>
      </form>
    </main>
  );
}

Todo.displayName = displayName;
Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default Todo;
