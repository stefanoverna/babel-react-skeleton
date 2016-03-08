import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'components/routes/App';
import Root from 'components/routes/Root';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Root} />
  </Route>
);

export default routes;
