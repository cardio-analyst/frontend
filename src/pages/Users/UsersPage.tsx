import React from 'react';
import { UsersData } from 'modules/UsersData';
import { PageLayout } from 'components/PageLayout';

const UsersPage = () => (
    <PageLayout title='Пользователи'>
        <UsersData />
    </PageLayout>
)

export default UsersPage;
