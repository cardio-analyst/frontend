import React from 'react';
import { Bar } from '@ant-design/plots';
import { mockedData } from '../constant/mockedData';
import { Card } from 'antd';

export const DiseasesChart = () => {
    const config = {
        data: mockedData,
        xField: 'value',
        yField: 'type',
        seriesField: 'type',
    };
    return (
        <Card title='Статистика по заболеваниям'>
            <Bar {...config} />
        </Card>
    );
};
