import React from 'react';
import { ConfigProvider, DatePicker as DatePickers } from 'antd';
import {
    DatePicker,
} from '@formily/antd';
import zhCN from 'antd/lib/locale/zh_CN';

export default (props) => {

    return (
        <ConfigProvider locale={zhCN}>
            <h1>自定义webpack配置，@formily/antd中DatePicker国际化失效Demo</h1>
            @formily/antd:
            <br/>
            <DatePicker />
            <br/>
            <br/>
            antd:
            <br/>
            <DatePickers />
        </ConfigProvider>
    );

};
 