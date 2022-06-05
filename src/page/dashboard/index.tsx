import React, { useContext } from 'react';
import { Layout } from 'antd';
import { store } from '@/store';
import { InnerRoute } from '@/routes';

import CompHeader from './comps/header';
import CompSider from './comps/sider';
import CompBreadCrumb from './comps/breadcrumb';

import './index.less';

const { Content } = Layout;

function Dashboard(props: any) {
  const { state } = useContext(store);
  const { theme } = state;
  const { childRoutes } = props;
  return (
    <Layout style={{ height: '100vh' }}>
      <CompHeader />
      <Layout>
        <CompSider />
        <Layout
          style={{
            overflowY: 'auto',
            padding: '0 24px 24px',
            backgroundColor: theme === 'dark' ? 'var(--color-bg5)' : '',
          }}
        >
          <CompBreadCrumb />
          <Content
            className={
              theme === 'dark' ? 'dashboard-content dark' : 'dashboard-content'
            }
          >
            <section className="dashboard-content-wrapper">
              <InnerRoute innerRoutes={childRoutes} />
            </section>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
