import React, { PropsWithChildren } from 'react';
import { Layout } from 'antd';
import { Header } from 'modules/Header';
import { Outlet } from 'react-router-dom';
import styles from './layouts.module.scss';

const { Content } = Layout;

const PrivateLayout: React.FC<PropsWithChildren> = () => (
    <Layout>
        <Header />
        <Content className={styles.content}>
            <Outlet />
        </Content>
    </Layout>
);

export default PrivateLayout;
