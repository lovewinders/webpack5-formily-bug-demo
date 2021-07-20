/*** 
 * @Author: zhangb
 * @Date: 2021-07-19 16:56:40
 * @Email: lovewinders@163.com
 * @LastEditors: zhangbao
 * @LastEditTime: 2021-07-20 15:01:26
 * @FilePath: /demo/src/pages/App.js
 * @Description: 
 */
import React from 'react';
import { createForm, onFieldReact } from '@formily/core';
import { Field, VoidField, FormConsumer, FormProvider } from '@formily/react';
import { ConfigProvider, DatePicker as DatePickers, Transfer as Transfers } from 'antd';
import {
    Form,
    FormItem,
    DatePicker,
    Transfer
} from '@formily/antd';
import zhCN from 'antd/lib/locale/zh_CN';

const form = createForm({
    validateFirst: true
});

export default (props) => {

    return (
        <ConfigProvider locale={zhCN}>
            <h1>自定义webpack配置，@formily/antd中DatePicker国际化失效Demo</h1>
            @formily/antd:
            <br/>
            <DatePicker />
            <FormProvider form={form}>
                <Field
                    name="transfer"
                    dataSource={[
                        { title: 'Option 1', key: 1 },
                        { title: 'Option 2', key: 2 },
                    ]}
                    decorator={[FormItem]}
                    component={[
                        Transfer,
                        {
                        render: (item) => item.title,
                        },
                    ]}
                />
            </FormProvider>
            <br/>
            <br/>
            antd:
            <br/>
            <DatePickers />
            <Transfers
                dataSource={[]}
            />
        </ConfigProvider>
    );

};
 