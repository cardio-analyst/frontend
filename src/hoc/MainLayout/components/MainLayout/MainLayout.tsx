import React from 'react';
import { MainRoutes } from 'hoc/MainLayout/components/Routes/MainRoutes';
import { Layout } from 'antd';
import { Header, profileSelector } from 'modules/Header';
import styles from './MainLayout.module.scss';
import { useAppSelector } from '../../../../hooks/useAppSelector';

const { Content } = Layout;

export const MainLayout = () => {
    const { profile } = useAppSelector(profileSelector);
    const isLoginPage = location.pathname === '/login';

    const LayoutContent = () => (
        <Layout>
            {!isLoginPage && profile && <Header />}
            <Content>
                <MainRoutes />
            </Content>
        </Layout>
    );

    return (
        <div className={styles.container}>
            <LayoutContent />
        </div>
    );
};
