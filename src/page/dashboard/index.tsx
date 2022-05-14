import React from 'react';
import { Layout } from 'antd';
import { InnerRoute } from '@/routes';

import CompHeader from './comps/header';
import CompSider from './comps/sider';
import CompBreadCrumb from './comps/breadcrumb';

import './index.less';

const { Content } = Layout;

function Dashboard(props: any) {
  const { childRoutes } = props;
  return (
    <Layout style={{ height: '100vh' }}>
      <CompHeader />
      <Layout>
        <CompSider />
        <Layout style={{ padding: '0 24px 24px' }}>
          <CompBreadCrumb />
          <Content
            className="dashboard-content"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <InnerRoute innerRoutes={childRoutes} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
