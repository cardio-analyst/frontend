import React from 'react';
import { LoginForm } from 'modules/LoginForm';
import styles from './Login.module.scss';

const LoginPage = () => (
    <div className={styles.loginContainer}>
        <div className={styles.wrapperForm}>
            <LoginForm />
        </div>
    </div>
)

export default LoginPage;
