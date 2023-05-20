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
const UserPage = lazy(() => import('pages/User/UserPage'));
const HelpPage = lazy(() => import('pages/Help/HelpPage'));
const FeedbacksPage = lazy(() => import('pages/Feedbacks/FeedbacksPage'));
const AnalyticsPage = lazy(() => import('pages/Analytics/AnalyticsPage'));

const LoginPage = lazy(() => import('pages/Login/Login'));
const RegistrationPage = lazy(() => import('pages/Registration/Registration'));

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
                <Route path={routes.registration} element={<RegistrationPage />} />
            </Route>
            <Route
                element={
                    <PrivateRoute>
                        <PrivateLayout />
                    </PrivateRoute>
                }
            >
                <Route path={routes.user} element={<UserPage />} />
                <Route path={routes.users} element={<UsersPage />} />
                <Route path={routes.help} element={<HelpPage />} />
                <Route path={routes.feedbacks} element={<FeedbacksPage />} />
                <Route path={routes.analytics} element={<AnalyticsPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    </Suspense>
);
