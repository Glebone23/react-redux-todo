import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'Button';

const propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.string,
  type: PropTypes.string,
};

const defaultProps = {
  onClick: undefined,
  style: {},
  children: '',
  type: 'button',
};

/* eslint-disable react/button-has-type */
function Button({
  onClick, style, children, type,
}) {
  return (
    <button type={type} onClick={onClick} style={style}>
      {children}
    </button>
  );
}

Button.displayName = displayName;
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
