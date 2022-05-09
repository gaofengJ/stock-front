/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { HashRouter as Router, Route, withRouter } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import routes from './route';

const MainRouter = withRouter(({ location }) => (
  <CacheSwitch location={location}>
    {routes.map((route) => (route.isCache ? (
      <CacheRoute
        cacheKey={route.path}
        key={route.name}
        path={route.path}
        exact
        render={(props: any) => <route.Component {...props} />}
      />
    ) : (
      <Route
        key={route.name}
        path={route.path}
        exact
        render={(props: any) => <route.Component {...props} />}
      />
    )))}
  </CacheSwitch>
));

function RouterConfig() {
  return (
    <Router basename="/random-order">
      <MainRouter />
    </Router>
  );
}

export default RouterConfig;
