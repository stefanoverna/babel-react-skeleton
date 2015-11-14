import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import routes from 'routes';
import store from 'store';
import { boot } from 'actions/ui';
import { Router, browserHistory } from 'react-router';

const root = (
  <Provider store={store}>
    <Router history={browserHistory}>
      { routes }
    </Router>
  </Provider>
);

store.dispatch(boot());

ReactDom.render(root, document.getElementById('root'));
