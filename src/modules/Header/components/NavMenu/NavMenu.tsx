import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu as MenuAntd } from 'antd';

import styles from './NavMenu.module.scss';

export interface NavItem {
    label: string;
    key: string;
}

interface NavMenuProps {
    items: NavItem[];
}

const NavMenu: React.FC<NavMenuProps> = ({ items }) => {
    const location = useLocation();

    if (!items || items.length < 1) {
        return null;
    }
    const formattedItems = items.map((item) => ({
        label: <NavLink to={item.key}>{item.label}</NavLink>,
        key: item.key,
    }));

    return (
        <div className={styles.wrapper}>
            <MenuAntd
                selectedKeys={[location.pathname]}
                items={formattedItems}
                mode='horizontal'
            />
        </div>
    );
};

export default NavMenu;
