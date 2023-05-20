import React from 'react';
import { Bar } from '@ant-design/plots';
import { Card } from 'antd';
import { useAppSelector } from 'hooks/useAppSelector';
import { analyticsSelector } from '../../store/analyticsSelector';

export const CitiesChart = () => {
    const { usersByRegions } = useAppSelector(analyticsSelector);
    const config = {
        data: usersByRegions || [],
        xField: 'value',
        yField: 'region',
        yAxis: {
            label: {
                autoRotate: false,
            },
        },
        scrollbar: {
            type: 'vertical',
        },
    };

    return (
        <Card title='Статистика пользователей по городам'>
            <Bar {...config} />
        </Card>
    );
};
