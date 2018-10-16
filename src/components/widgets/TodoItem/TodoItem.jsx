import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/controls';

const displayName = 'TodoItem';

const propTypes = {
  name: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

function TodoItem({ name, handleRemove }) {
  return (
    <div>
      <span>
        {name}
        {' - '}
      </span>
      <Button onClick={handleRemove}>remove</Button>
    </div>
  );
}

TodoItem.displayName = displayName;
TodoItem.propTypes = propTypes;

export default TodoItem;
