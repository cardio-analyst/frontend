import React from 'react';
import { UsersTable } from 'modules/UsersTable';
import { PageLayout } from 'components/PageLayout';

const UsersPage = () => (
    <PageLayout title='Пользователи'>
        <UsersTable />
    </PageLayout>
)

export default UsersPage;
