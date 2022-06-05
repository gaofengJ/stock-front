import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { store } from '@/store';
import { routeItems, breadcrumbMap } from '@/const/dashboard';

const CompBreadCrumb = () => {
  const { state } = useContext(store);
  const { theme } = state;
  const location = useLocation();
  const { pathname } = location;
  // eslint-disable-next-line no-unused-vars
  const [_, ...pathArr] = pathname.split('/');
  const primaryPath = pathArr[0];
  const curRouteItem = routeItems.find(
    (routeItem: Record<string, any>) => routeItem.key === primaryPath,
  );
  return (
    curRouteItem?.showBreadcrumb
      ? (
        <Breadcrumb
          className={theme === 'dark' ? 'dark' : ''}
          style={{ margin: '16px 0' }}
        >
          {
        pathArr.map((path: string) => (
          <Breadcrumb.Item key={path}>{ breadcrumbMap[path] }</Breadcrumb.Item>
        ))
      }
        </Breadcrumb>
      )
      : null
  );
};

export default CompBreadCrumb;
