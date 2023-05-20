import React, { PropsWithChildren } from 'react';
import { Button, Collapse, Typography } from 'antd';
import clsx from 'clsx';
import styles from './FiltersContainer.module.scss';
const { Title } = Typography;
const { Panel } = Collapse;

interface FiltersProps extends PropsWithChildren {
    wrapperClassName?: string;
    isLoading?: boolean;
    onApply: () => void;
}

export const FiltersContainer: React.FC<FiltersProps> = ({
    wrapperClassName,
    onApply,
    isLoading,
    children,
}) => {
    return (
        <Collapse className={clsx(styles.container, wrapperClassName)} ghost>
            <Panel header={<Title level={4}>Фильтры</Title>} key='1'>
                <div className={styles.filters}>{children}</div>
                <div className={styles.applyBlock}>
                    <Button
                        type='primary'
                        loading={isLoading}
                        onClick={onApply}
                    >
                        Применить
                    </Button>
                </div>
            </Panel>
        </Collapse>
    );
};
