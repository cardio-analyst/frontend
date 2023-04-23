import React from 'react';
import styles from './PageLayout.module.scss';

interface PageLayoutProps {
    title: string;
    children: React.ReactElement;
    headerChildren?: React.ReactElement;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
    title,
    children
}) => (
    <div className={styles.container}>
        <div className={styles.header}>
            <h2>{title}</h2>
        </div>
        {children}
    </div>
);
