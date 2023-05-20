import React from 'react';
import styles from './UserData.module.scss';
import { PersonalInfo } from '../PersonalInfo/PersonalInfo';
import { HealthInfo } from '../HealthInfo/HealthInfo';
import { Lifestyle } from '../Lifestyle/Lifestyle';

export const UserData = () => {
    return (
        <div className={styles.container}>
            <PersonalInfo />
            <HealthInfo />
            <Lifestyle />
        </div>
    );
};
