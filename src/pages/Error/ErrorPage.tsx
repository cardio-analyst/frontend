import React from 'react';
import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
    return (
        <div className={styles.errorWrapper}>
            <h2>Ошибка 404</h2>
            <p>Страница не была найдена</p>
        </div>
    )
};

export default ErrorPage;
