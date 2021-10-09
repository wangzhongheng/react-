import React from 'react';
import {Layout} from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
const { Header } = Layout;
export default class HeaderBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    toggle = () => {
        this.props.onToggle();
    }
    render(){
        let { collapsed } = this.props;
        return(
                <Header className="site-layout-background" style={{ padding: '0 24px' }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: this.toggle,
                    })}
                </Header>
        )
    }
}
