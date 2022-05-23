import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Layout, Menu, Switch, Avatar,
} from 'antd';
import { store } from '@/store';
import { createFromIconfontCN, UserOutlined } from '@ant-design/icons';

import { headerMenuItems } from '@/const/dashboard';

const { Header } = Layout;

const IconFont = createFromIconfontCN({
  scriptUrl:
    'https://at.alicdn.com/t/font_3112680_et19q3xyoib.js?spm=a313x.7781069.1998910419.52&file=font_3112680_et19q3xyoib.js',
});

const CompHeader = () => {
  const location = useLocation();
  const { pathname } = location;
  const primaryPath = pathname.split('/')[1];
  // eslint-disable-next-line no-unused-vars
  const [selectedTab, setSelectedTab] = useState([primaryPath]);
  const { state, dispatch } = useContext(store);
  const { theme } = state;
  const [switchChecked, setSwitchChecked] = useState<boolean>(false);
  const onChange = (checked: boolean): void => {
    setSwitchChecked(checked);
    dispatch({
      value: {
        theme: checked ? 'dark' : 'light',
      },
    });
  };
  return (
    <Header
      className={
        theme === 'dark' ? 'dashboard-header dark' : 'dashboard-header'
      }
    >
      <IconFont type="icon-fengye" style={{ fontSize: '32px' }} />
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
        theme={theme}
        defaultSelectedKeys={selectedTab}
        items={headerMenuItems}
      />
      <span style={{ flexGrow: 1 }} />
      <div className="flex-c" style={{ paddingRight: 16 }}>
        <Switch checked={switchChecked} onChange={onChange} />
        <span style={{ paddingLeft: 8 }}>
          暗色模式
        </span>
      </div>
      <Avatar
        icon={<UserOutlined />}
        className="cp"
        style={{ backgroundColor: 'var(--color-red)' }}
      />
    </Header>
  );
};

export default CompHeader;
