import { compose, setDisplayName } from 'recompose';
import TodoItem from './TodoItem';

export const enhance = compose(
  setDisplayName('TodoItemContainer'),
);

export default enhance(TodoItem);
