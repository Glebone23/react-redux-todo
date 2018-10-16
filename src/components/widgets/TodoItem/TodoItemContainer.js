import { compose, setDisplayName, setPropTypes, withHandlers } from 'recompose';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export const enhance = compose(
  setDisplayName('TodoItemContainer'),
  setPropTypes({
    id: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
  }),
  withHandlers({
    handleRemove: ({ id, onRemove }) => () => onRemove(id),
  }),
);

export default enhance(TodoItem);
