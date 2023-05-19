import React from 'react';
import { Bar } from '@ant-design/plots';
import { mockedDataCitiesChart } from '../../constants/mockedData';
import { Card } from 'antd';

export const CitiesChart = () => {
    const config = {
        data: mockedDataCitiesChart,
        xField: 'value',
        yField: 'type',
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
