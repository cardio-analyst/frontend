import React from 'react';
import { Pie } from '@ant-design/plots';
import { Card } from 'antd';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { analyticsSelector } from '../../store/analyticsSelector';

export const CardioAgeChart = () => {
    const { cardiovascularAgesRangesByUsers } =
        useAppSelector(analyticsSelector);
    const config = {
        appendPadding: 10,
        data: cardiovascularAgesRangesByUsers || [],
        angleField: 'value',
        colorField: 'range',
        radius: 0.8,
        label: {
            type: 'outer',
            content: '{name} {percentage}',
        },
        interactions: [
            {
                type: 'pie-legend-active',
            },
            {
                type: 'element-active',
            },
        ],
    };
    return (
        <Card title='Статистика по группам риска'>
            <Pie {...config} />
        </Card>
    );
};
