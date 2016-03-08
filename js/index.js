import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import EntryPoint from 'components/EntryPoint';

const root = (
  <Provider store={store}>
    <EntryPoint />
  </Provider>
);

ReactDom.render(root, document.getElementById('root'));
