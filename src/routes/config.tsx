/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  HashRouter as Router, Route, Redirect, withRouter,
} from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import { IRoute, routes } from './route';

const MainRouter = withRouter(({ location }) => (
  <CacheSwitch location={location}>
    {routes.map((route) => (route.isCache ? (
      <CacheRoute
        cacheKey={route.path}
        key={route.name}
        path={route.path}
        exact
        render={(props: any) => <route.Component {...props} {...route} />}
      />
    ) : (
      <Route
        key={route.name}
        path={route.path}
        exact
        render={(props: any) => <route.Component {...props} {...route} />}
      />
    )))}
  </CacheSwitch>
));

export function RouterConfig() {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
}

export const InnerRoute = (props: { innerRoutes: IRoute[] }) => {
  const { innerRoutes } = props;
  return (
    <CacheSwitch>
      {
        innerRoutes.map((route: IRoute) => (route.isCache ? (
          <CacheRoute
            cacheKey={route.path}
            key={route.name}
            path={route.path}
            exact
            render={(subProps: any) => <route.Component {...subProps} {...route} />}
          />
        ) : (
          <Route
            key={route.name}
            path={route.path}
            exact
            render={(subProps: any) => <route.Component {...subProps} {...route} />}
          />
        )))
      }
      <Redirect from="/*" to="/data" />
    </CacheSwitch>
  );
};
