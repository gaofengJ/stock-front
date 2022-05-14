import React from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { routeItems } from '@/const/dashboard';

const { Sider } = Layout;

const CompSider = () => {
  const location = useLocation();
  const { pathname } = location;
  const primaryPath = pathname.split('/')[1];
  const curRouteItem = routeItems.find(
    (routeItem: Record<string, any>) => routeItem.key === primaryPath,
  );
  return (
    curRouteItem?.showAside
      ? (
        <Sider
          width={256}
          theme="light"
          collapsible
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: '1px solid #e3e5e7' }}
            items={curRouteItem.siderMenuItems}
          />
        </Sider>
      ) : null
  );
};

export default CompSider;
