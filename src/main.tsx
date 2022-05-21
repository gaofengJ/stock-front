import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import { Store } from '@/store';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/dist/locale/zh-cn';
import App from './App';
import 'babel-polyfill';

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </Store>
  </React.StrictMode>,
  document.getElementById('root'),
);
