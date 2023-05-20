import React, { PropsWithChildren } from 'react';
import { Typography } from 'antd';
import styles from './FilterItem.module.scss';

const { Title } = Typography;

interface FilterItemProps extends PropsWithChildren {
    title: string;
}

export const FilterItem: React.FC<FilterItemProps> = ({ title, children }) => (
    <div className={styles.filter}>
        <Title level={5}>{title}</Title>
        {children}
    </div>
);
