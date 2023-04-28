import React from 'react';
import { LoginForm } from 'modules/LoginForm';
import styles from './Login.module.scss';

const LoginPage = () => (
    <div className={styles.loginContainer}>
        <LoginForm />
    </div>
)

export default LoginPage;
