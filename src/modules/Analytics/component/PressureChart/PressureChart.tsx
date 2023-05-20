import React from 'react';
import { Column } from '@ant-design/plots';
import { Card } from 'antd';
import { useAppSelector } from 'hooks/useAppSelector';
import { analyticsSelector } from '../../store/analyticsSelector';

export const PressureChart = () => {
    const { sbpByUsers } = useAppSelector(analyticsSelector);
    const config = {
        data: sbpByUsers || [],
        xField: 'range',
        yField: 'value',
    };
    return (
        <Card title='Статистика распределения по уровню давления'>
            <Column {...config} />
        </Card>
    );
};
