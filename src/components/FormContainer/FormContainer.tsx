import React from 'react';
import { Typography } from 'antd';
import clsx from 'clsx';

import styles from './FormContainer.module.scss';

const { Title } = Typography;

interface FormContainerProps {
    title: string;
    children: React.ReactElement;
    wrapperClassName?: string;
}

export const FormContainer: React.FC<FormContainerProps> = ({
    title,
    wrapperClassName,
    children,
}) => (
    <div className={clsx(styles.loginFormContainer, wrapperClassName)}>
        <Title level={3} className={styles.title}>
            {title}
        </Title>
        {children}
    </div>
);
