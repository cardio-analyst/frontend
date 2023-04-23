import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { hasAuthCookies } from 'utils/cookie';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { getProfileInfo, profileSelector } from 'modules/Header';
import { useAppSelector } from 'hooks/useAppSelector';

interface PrivateRouteProps {
    children: React.ReactElement;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { profile } = useAppSelector(profileSelector);
    const dispatch = useAppDispatch();
    const location = useLocation();
    const isAuthenticated = hasAuthCookies();

    useEffect(() => {
        if (isAuthenticated && !profile) {
            dispatch(getProfileInfo());
        }
    }, [isAuthenticated]);

    if (isAuthenticated) {
        return children;
    }
    return <Navigate to={routes.login} state={{ from: location }} />;
};
