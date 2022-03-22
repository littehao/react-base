import React from 'react';
import { withRouter } from 'react-router-dom'; // 使用高阶函数 才能使用props.history
import { Layout, Menu } from 'antd';
import {
    UserOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

const { Sider } = Layout;

function SideMenu(props) {
    const menu = [
        {
            id: 1,
            title: "首页",
            key: "/home",
            children: []
        },
        {
            id: 2,
            title: "用户管理",
            key: "/user-manage",
            children: [
                {
                    id: 6,
                    title: "用户列表",
                    key: "/user-manage/list",
                }
            ]
        },
        {
            id: 3,
            title: "todolist",
            key: "/todolist",
            children: []
        }
    ]
    const renderMenu = (menulist) => {
        return menulist.map((item) => {
            if (item.children?.length > 0) {
                return (
                    <SubMenu key={item.key} icon={<UserOutlined />} title={item.title}>
                        {renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.key} icon={<UserOutlined />} onClick={() => {
                    props.history.push(item.key)
                }}>{item.title}</Menu.Item>
            )
        })
    }

    const selectKey = props.location.pathname
    const openkey = '/' + props.location.pathname.split('/')[1]
    return (
        <Sider trigger={null} collapsible>
            <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
                <div className="logo">后台管理系统</div>
                <Menu theme="dark" mode="inline" style={{ flex: 1, overflow: 'auto' }} selectedKeys={selectKey} defaultOpenKeys={[openkey]}>
                    {renderMenu(menu)}
                </Menu>
            </div>
        </Sider>
    );
}


export default withRouter(SideMenu);