import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { store } from '@/store';

import { routeItems } from '@/const/dashboard';

const { Sider } = Layout;

const CompSider = () => {
  const location = useLocation();
  const { pathname } = location;
  const primaryPath = pathname.split('/')[1];
  const mainMenuKey = pathname.split('/').slice(0, 3).join('/');
  const curRouteItem = routeItems.find(
    (routeItem: Record<string, any>) => routeItem.key === primaryPath,
  );
  // eslint-disable-next-line no-unused-vars
  const [selectedTab, setSelectedTab] = useState([pathname]);
  const { state } = useContext(store);
  const { theme } = state;
  return curRouteItem?.showAside ? (
    <Sider width={256} theme={theme} collapsible>
      <Menu
        mode="inline"
        theme={theme}
        defaultSelectedKeys={selectedTab}
        defaultOpenKeys={[mainMenuKey]}
        style={{ height: '100%', borderRight: '1px solid #e3e5e7' }}
        items={curRouteItem.siderMenuItems}
      />
    </Sider>
  ) : null;
};

export default CompSider;
