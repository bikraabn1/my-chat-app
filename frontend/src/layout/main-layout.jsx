import React from 'react';
import { Breadcrumb, Typography, Layout, Menu, theme } from 'antd';

const { Header, Content } = Layout;

const items = Array.from({ length: 3 }).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
}));

const MainLayout = ({ children }) => {
    const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
    const { Title } = Typography
    return (
        <Layout style={{ height: "100vh" }}>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Content style={{ padding: '0 48px',flex: 1 }}>
                <Breadcrumb
                    style={{ margin: '16px 0 5px 0' }}
                    items={[{ title: <Title level={3}>Chat App</Title> }]}
                />
                <div
                    style={{
                        padding: 24,
                        height: "87.5%",
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </div>
            </Content>
        </Layout>
    );
};
export default MainLayout;