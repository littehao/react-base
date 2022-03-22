import React from 'react';
import SideMenu from '@/components/SideMenu';
import TopHeader from '@/components/TopHeader';
import MainRouter from '@/router/MainRouter';
import { Layout } from 'antd';
const {Content } = Layout;


export default function Main() {
  return(
    <Layout>
      <SideMenu></SideMenu>
      <Layout className='site-layout'>
          <TopHeader></TopHeader>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              overflow:'auto'
            }}
          >
              <MainRouter></MainRouter>
          </Content>
      </Layout>
      
    </Layout>
  );
}
