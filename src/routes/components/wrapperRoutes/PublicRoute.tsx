import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { hasAuthCookies } from 'utils/cookie';
import { routes } from '../../constants/routes';

interface PublicRouteProps {
    children: React.ReactElement;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
    const location = useLocation();
    const isAuthenticated = hasAuthCookies();

    if (isAuthenticated) {
        return (
            <Navigate to={routes.users} state={{ from: location }} replace />
        );
    }
    return children;
};
