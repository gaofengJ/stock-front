import * as React from 'react';
import {
  Dashboard,
  Home,
  Market,
  Data,
  DataBasic,
  DataBasicStock,
  DataBasicDaily,
  DataQuota,
  DataLimit,
  Review,
} from '@/page';

export interface IRoute {
  path: string;
  Component: React.FC;
  name: string,
  routes?: any;
  isCache?: boolean;
  childRoutes?: IRoute[];
}

export const routes: IRoute[] = [
  {
    path: '/*', // 不加*子路由没有办法显示
    name: 'Dashboard',
    Component: Dashboard,
    childRoutes: [
      {
        path: '/home',
        name: 'Home',
        Component: Home,
      },
      {
        path: '/market',
        name: 'Market',
        Component: Market,
      },
      {
        path: '/data',
        name: 'Data',
        Component: Data,
      },
      {
        path: '/data/quota',
        name: 'DataQuota',
        Component: DataQuota,
      },
      {
        path: '/data/limit',
        name: 'DataLimit',
        Component: DataLimit,
      },
      {
        path: '/data/basic',
        name: 'DataBasic',
        Component: DataBasic,
      },
      {
        path: '/data/basic/stock',
        name: 'DataBasicStock',
        Component: DataBasicStock,
      },
      {
        path: '/data/basic/daily',
        name: 'DataBasicDaily',
        Component: DataBasicDaily,
      },
      {
        path: '/review',
        name: 'Review',
        Component: Review,
      },
    ],
  },
];
