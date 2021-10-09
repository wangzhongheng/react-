import React from 'react';
import './style.scss';
import { Card,Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    onFinish = (values) => {
        this.props.history.replace('/assistantDecision/dataSearch')
    }

    render(){
        return (
            <div className="loginBox">
                <div className="loginForm">
                    <Card bordered={false} style={{ width: 300 }} >
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: '请输入您的姓名!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="姓名" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: '请输入您的密码!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="密码"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>保存密码</Checkbox>
                                </Form.Item>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登陆
                                </Button>
                                {/*Or <a href="">立即注册</a>*/}
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </div>
        )
    }
}
