import React from 'react';
import { Link } from 'react-router-dom';
import type { MenuProps } from 'antd';
import {
  TableOutlined, LineChartOutlined, RiseOutlined,
} from '@ant-design/icons';

// 顶部菜单
export const headerMenuItems: MenuProps['items'] = [
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
    label: <Link to="/review">每日复盘</Link>,
  },
];

// 路由对应信息
export const routeItems: Record<string, any>[] = [
  {
    key: 'home',
    showAside: false,
    showBreadcrumb: true,
  },
  {
    key: 'market',
    showAside: false,
    showBreadcrumb: true,
  },
  {
    key: 'data',
    showAside: true,
    showBreadcrumb: true,
    siderMenuItems: [
      {
        key: '/data/quota',
        icon: React.createElement(LineChartOutlined),
        label: <Link to="/data/quota">情绪指标</Link>,
      },
      {
        key: '/data/limit',
        icon: React.createElement(RiseOutlined),
        label: <Link to="/data/limit">连板统计</Link>,
      },
      {
        key: '/data/basic',
        icon: React.createElement(TableOutlined),
        label: <Link to="/data/basic">基础信息</Link>,
        children: [
          {
            key: '/data/basic/stock',
            label: <Link to="/data/basic/stock">个股基本信息</Link>,
          },
          {
            key: '/data/basic/daily',
            label: <Link to="/data/basic/daily">每日交易数据</Link>,
          },
        ],
      },
    ],
  },
  {
    key: 'review',
    showAside: false,
    showBreadcrumb: true,
  },
];

// 路由对应面包屑
export const breadcrumbMap: Record<string, string> = {
  // 一级路由
  home: '首页',
  market: '市场行情',
  data: '数据分析',
  review: '每日复盘',
  // 二级路由（数据分析）
  basic: '基础信息',
  quota: '情绪指标',
  limit: '连板统计',
  // 三级路由（数据分析 -> 基础信息）
  stock: '个股基本信息',
  daily: '每日交易数据',
};
