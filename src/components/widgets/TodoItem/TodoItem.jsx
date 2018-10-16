import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'TodoItem';

const propTypes = {
  name: PropTypes.string.isRequired,
};

function TodoItem({ name }) {
  return (
    <div>
      <span>{name}</span>
      <button>remove</button>
    </div>
  );
}

TodoItem.displayName = displayName;
TodoItem.propTypes = propTypes;

export default TodoItem;
