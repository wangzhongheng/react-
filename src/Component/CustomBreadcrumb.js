import React from 'react'
import {Breadcrumb} from 'antd'
import {Link} from 'react-router-dom'

const CustomBreadcrumb = (props)=>(
    <Breadcrumb style={{ margin: '16px 0',padding:"0 24px" }}>
        {/*<Breadcrumb.Item><Link to='/'>首页</Link></Breadcrumb.Item>*/}
        {props.arr && props.arr.map(item=>{
            if ((typeof item) === 'object'){
                return <Breadcrumb.Item key={item.title}><Link to={item.to}>{item.title}</Link></Breadcrumb.Item>
            } else {
                return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
            }
        })}
    </Breadcrumb>
)
export default CustomBreadcrumb
