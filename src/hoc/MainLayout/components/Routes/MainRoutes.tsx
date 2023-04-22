import { Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/Login/Login';
import { routes } from 'hoc/MainLayout/constants/routes';
import { PrivateRoute } from './PrivateRoute';
import { lazy, Suspense } from 'react';
import { Spin } from 'antd';

const UsersPage = lazy(() => import('pages/Users/UsersPage'));
const HelpPage = lazy(() => import('pages/Help/HelpPage'));

export const MainRoutes = () => (
    <Suspense fallback={<Spin />}>
        <Routes>
            <Route index path={routes.login} element={<LoginPage />} />
            <Route
                path={routes.help}
                element={
                    <PrivateRoute>
                        <HelpPage />
                    </PrivateRoute>
                }
            />
            <Route
                path={routes.users}
                element={
                    <PrivateRoute>
                        <UsersPage />
                    </PrivateRoute>
                }
            />
        </Routes>
    </Suspense>
);
