import React from 'react';
import styles from './Registration.module.scss';
import { RegistrationForm } from 'modules/RegistrationForm';

const Registration = () => {
    return (
        <div className={styles.registerContainer}>
            <RegistrationForm />
        </div>
    );
};

export default Registration;
