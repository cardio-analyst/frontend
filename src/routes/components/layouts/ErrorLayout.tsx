import React from 'react';
import { hasAuthCookies } from 'utils/cookie';
import PrivateLayout from './PrivateLayout';
import PublicLayout from './PublicLayout';

const ErrorLayout = () => {
    const isAuthenticated = hasAuthCookies();

    if (isAuthenticated) {
        return <PrivateLayout />;
    }
    return <PublicLayout />;
};

export default ErrorLayout;
