import * as React from 'react';

import { Settings, Dashboard } from '@/page';

interface IRoute {
  path: string;
  Component: React.FC;
  name: string,
  routes?: any;
  isCache?: boolean;
}

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Dashboard',
    Component: Dashboard,
  },
  {
    path: '/data',
    name: 'Data',
    Component: Settings,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    Component: Dashboard,
  },
];

export default routes;
