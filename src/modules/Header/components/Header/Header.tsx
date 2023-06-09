import React, { useMemo } from 'react';

import { Button } from 'antd';
import NavMenu, { NavItem } from '../NavMenu/NavMenu';
import { Logout, Logo } from '../../icons';

import { routes } from 'routes';

import styles from './Header.module.scss';
import { useAppSelector } from 'hooks/useAppSelector';
import { profileSelector } from '../../store/profileSelector';
import { deleteCookie } from 'utils/cookie';

export const Header = () => {
    const { profile } = useAppSelector(profileSelector);

    const menuItems: NavItem[] = [
        {
            label: 'Справка',
            key: routes.help,
        },
        {
            label: 'Пользователи',
            key: routes.users,
        },
        {
            label: 'Аналитика',
            key: routes.analytics,
        },
        {
            label: 'Отзывы',
            key: routes.feedbacks,
        },
    ];

    const onLogout = () => {
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
        window.history.go(0);
    };

    const userDisplayName = useMemo(() => {
        return `${profile?.firstName} ${profile?.lastName}`;
    }, [profile]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.navMenu}>
                <NavMenu items={menuItems} />
            </div>
            <div className={styles.loginBar}>
                {userDisplayName && (
                    <span className={styles.name}>{userDisplayName}</span>
                )}
                <Button
                    type='ghost'
                    onClick={onLogout}
                    shape='circle'
                    icon={<Logout />}
                />
            </div>
        </div>
    );
};
