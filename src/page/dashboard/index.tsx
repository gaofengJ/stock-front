import React from 'react';
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

const items1: MenuProps['items'] = [
  {
    key: 'home',
    label: '首页',
  },
  {
    key: 'market',
    label: '市场行情',
  },
  {
    key: 'data',
    label: '数据分析',
  },
  {
    key: 'review',
    label: '每日复盘',
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
  return (
    <Layout style={{ height: '100vh' }}>
      <Header className="dashboard-header">
        <IconFont
          type="icon-fengye"
          style={{ fontSize: '32px' }}
        />
        <span
          style={{ padding: '0 80px 0 4px', fontSize: '20px', fontWeight: 400 }}
        >
          木风同学
        </span>
        <Menu mode="horizontal" defaultSelectedKeys={['home']} items={items1} />
      </Header>
      <Layout>
        <Sider width={256} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: '1px solid #e8e8e8' }}
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
            className="site-layout-background"
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
