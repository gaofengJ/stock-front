import * as React from 'react';

import { Order, Settings } from '@/page';

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
    name: 'Order',
    Component: Order,
  },
  {
    path: '/settings',
    name: 'Settings',
    Component: Settings,
  },
];

export default routes;
