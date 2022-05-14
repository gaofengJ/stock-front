import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';

import { headerMenuItems } from '@/const/dashboard';

const { Header } = Layout;

const IconFont = createFromIconfontCN({
  scriptUrl: 'https://at.alicdn.com/t/font_3112680_et19q3xyoib.js?spm=a313x.7781069.1998910419.52&file=font_3112680_et19q3xyoib.js',
});

const CompHeader = () => {
  const location = useLocation();
  const { pathname } = location;
  const primaryPath = pathname.split('/')[1];
  // eslint-disable-next-line no-unused-vars
  const [selectedTab, setSelectedTab] = useState([primaryPath]);
  return (
    <Header className="dashboard-header">
      <IconFont
        type="icon-fengye"
        style={{ fontSize: '32px' }}
      />
      <span
        style={{
          padding: '0 80px 0 4px',
          fontSize: '20px',
          fontWeight: 400,
        }}
      >
        木风同学
      </span>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={selectedTab}
        items={headerMenuItems}
      />
    </Header>
  );
};

export default CompHeader;
