import React, {PropsWithChildren} from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import styles from './layouts.module.scss';

const { Content } = Layout;

const PublicLayout: React.FC<PropsWithChildren> = () => {

    return (
        <Layout className={styles.layoutPublic}>
            <Content>
                <Outlet />
            </Content>
        </Layout>
    )

};

export default PublicLayout;

