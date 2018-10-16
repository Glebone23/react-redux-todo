import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Todo } from 'components/pages';
import store from './store/store';

const displayName = 'Application';

const propTypes = {
  title: PropTypes.string,
};

const defaultProps = {
  title: 'Hello, React by default!',
};

function App({ title }) {
  return (
    <Provider store={store}>
      <React.Fragment>
        <h1>{title}</h1>
        <Todo />
      </React.Fragment>
    </Provider>
  );
}

App.displayName = displayName;
App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
