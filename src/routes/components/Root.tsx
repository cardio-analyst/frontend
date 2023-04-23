import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../constants/routes';
import { Spin } from 'antd';
import { PrivateRoute } from './wrapperRoutes/PrivateRoute';
import {PublicRoute} from './wrapperRoutes/PublicRoute';

const PublicLayout = React.lazy(
    () => import('routes/components/layouts/PublicLayout'),
);
const PrivateLayout = React.lazy(
    () => import('routes/components/layouts/PrivateLayout'),
);

const UsersPage = lazy(() => import('pages/Users/UsersPage'));
const HelpPage = lazy(() => import('pages/Help/HelpPage'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const ErrorPage = lazy(() => import('pages/Error/ErrorPage'));

export const Root = () => (
    <Suspense fallback={<Spin />}>
        <Routes>
            <Route element={
                <PublicRoute>
                    <PublicLayout />
                </PublicRoute>
            }>
                <Route path={routes.login} element={<LoginPage />} />
            </Route>
            <Route
                element={
                    <PrivateRoute>
                        <PrivateLayout />
                    </PrivateRoute>
                }
            >
                <Route path={routes.users} element={<UsersPage />} />
                <Route path={routes.help} element={<HelpPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    </Suspense>
);
