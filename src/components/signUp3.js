import React from 'react';
import "./signUp3.css";

import { Button, Checkbox, Form, Input, Select, Dropdown, Space, } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Option } = Select;

const MyForm3 = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };


    const tailLayout = {
        wrapperCol: {
            offset: 1,
            span: 18,
        },
    };
    return (

        <>
            <Form.Item label="Bussiness Country">

                <Select

                    id="bussines-country"
                    placeholder="Please write a short description about your business"
                    style={{
                        width: 474
                    }}
                >
                    <Option value="Option 1">Option 1</Option>
                    <Option value="Option 2">Option 2</Option>
                    <Option value="Option 3">Option 3</Option>
                </Select>

            </Form.Item><Form.Item className="bussines-description" label="Bussiness Description">
                <Input className="bussines-description-input" placeholder="Please write a short description about your business" />
            </Form.Item>
            <Form.Item className="checkbox">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>I accept the terms & confitions</Checkbox>
                </Form.Item>
            </Form.Item>
            <Form.Item {...tailLayout}>
                {/* <Button htmlType="button">Back</Button> */}
                {/* <Button htmlType="button"> Next</Button> */}
            </Form.Item>
        </>

    );
};
export default MyForm3;
