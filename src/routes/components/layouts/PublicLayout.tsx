import React, {PropsWithChildren} from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

const { Content } = Layout;

const PublicLayout: React.FC<PropsWithChildren> = () => {

    return (
        <Layout>
            <Content>
                <Outlet />
            </Content>
        </Layout>
    )

};

export default PublicLayout;

