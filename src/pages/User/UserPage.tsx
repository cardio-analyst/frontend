import React from 'react';
import { UserData } from 'modules/UserData';
import { PageLayout } from 'components/PageLayout';

const UserPage = () => (
    <PageLayout title='Пользователь'>
        <UserData />
    </PageLayout>
)

export default UserPage;
