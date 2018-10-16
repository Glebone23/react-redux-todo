import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ToDo } from 'components/pages';
import store from './store/store';

const displayName = 'Application';

const propTypes = {
  title: PropTypes.string,
};

const defaultProps = {
  title: 'Hello, React by default!',
};

export default function App({ title }) {
  return (
    <Provider store={store}>
      <React.Fragment>
        <h1>{title}</h1>
        <ToDo />
      </React.Fragment>
    </Provider>
  );
}

App.displayName = displayName;
App.propTypes = propTypes;
App.defaultProps = defaultProps;
