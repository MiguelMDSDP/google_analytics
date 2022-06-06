import 'antd/dist/antd.css';

import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout className="layout">
    <Header>
        <Menu
            style={{
                alignItems: 'center',
                justifyContent: 'center',
            }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
        >
            <Menu.Item key='home'>
                <Link to="/">
                    Home
                </Link>
            </Menu.Item>
            <Menu.Item key='about'>
                <Link to="/about">
                    About
                </Link>
            </Menu.Item>
            <Menu.Item key='other'>
                <Link to="/other">
                    Other Stuff
                </Link>
            </Menu.Item>
        </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
            <Outlet />
        </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Google Analytics KT</Footer>
  </Layout>
);

export default App;