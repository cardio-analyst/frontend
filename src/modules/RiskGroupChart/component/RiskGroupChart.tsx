import React from 'react';
import { Pie } from '@ant-design/plots';
import { mockedData } from '../constant/mockedData';
import { Card } from 'antd';

export const RiskGroupChart = () => {
    const config = {
        appendPadding: 10,
        data: mockedData,
        angleField: 'value',
        colorField: 'type',
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
