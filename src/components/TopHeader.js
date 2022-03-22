import React, { useState } from 'react';
import { Layout ,Dropdown,Avatar,Menu} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined
} from '@ant-design/icons';
import { withRouter } from 'react-router-dom';

const { Header } = Layout;


function TopHeader(props) {
  const [collapsed,setCollapsed]  =  useState(false)

  const changeCollapse = ()=>{
    setCollapsed(!collapsed)
  }
  const menu = (
    <Menu>
      <Menu.Item  key={'1'}>
        超级管理员
      </Menu.Item>
      <Menu.Item  key={'2'} danger onClick={()=>{
        localStorage.removeItem("token")
        props.history.replace('/login')
      }}>
        退出
      </Menu.Item>
    </Menu>
  );

  return (
        <Header className="site-layout-background" style={{ padding: '0 16px'}}>
            {collapsed?<MenuUnfoldOutlined  onClick={changeCollapse}/>:<MenuFoldOutlined  onClick={changeCollapse}/>}
            <div  style={{float:'right'}}>
              <span style={{paddingRight:'10px'}}>欢迎<span  style={{color:'#1890ff'}}>admin</span>回来</span>
              <Dropdown overlay={menu} placement="bottomRight" arrow>
                  <Avatar size="large" icon={<UserOutlined />} />
              </Dropdown>
            </div>
        </Header>
  );
}

export default withRouter(TopHeader);