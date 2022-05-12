import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  createFromIconfontCN, UserOutlined, LaptopOutlined, NotificationOutlined,
} from '@ant-design/icons';

import './index.less';

const IconFont = createFromIconfontCN({
  scriptUrl: 'https://at.alicdn.com/t/font_3112680_et19q3xyoib.js?spm=a313x.7781069.1998910419.52&file=font_3112680_et19q3xyoib.js',
});

const { Header, Content, Sider } = Layout;

const tabs: MenuProps['items'] = [
  {
    key: 'home',
    label: <Link to="/home">首页</Link>,
  },
  {
    key: 'market',
    label: <Link to="/market">市场行情</Link>,
  },
  {
    key: 'data',
    label: <Link to="/data">数据分析</Link>,
  },
  {
    key: 'review',
    label: <Link to="/data">每日复盘</Link>,
  },
];

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = `${index + 1}`;
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

function Dashboard() {
  // eslint-disable-next-line no-unused-vars
  const [selectedTab, setSelectedTab] = useState(['home']);
  return (
    <Layout style={{ height: '100vh' }}>
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
          items={tabs}
        />
      </Header>
      <Layout>
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
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="dashboard-content"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
