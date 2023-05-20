import React from 'react';
import { UsersTable } from '../UsersTable/UsersTable';
import { UsersFilters } from '../UsersFilters/UsersFilters';
import styles from './UsersData.module.scss';

export const UsersData = () => {
    return (
        <div className={styles.usersData}>
            <UsersFilters wrapperClassName={styles.filters} />
            <UsersTable />
        </div>
    );
};
