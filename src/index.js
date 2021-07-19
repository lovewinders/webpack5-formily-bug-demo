import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import './index.less';

import moment from 'moment'
import 'moment/locale/zh-cn';
moment.locale('zh-cn')

import '@formily/antd/dist/antd.css';
import 'antd/dist/antd.css';

const container = document.createElement('h1');
document.body.appendChild(container);

ReactDOM.render(
  <App />,
  container
);