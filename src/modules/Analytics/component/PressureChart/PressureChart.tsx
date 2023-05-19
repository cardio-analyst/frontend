import React from 'react';
import { Column } from '@ant-design/plots';
import { ChartDefault } from '../../types/chart';
import { mockedDataPressure } from '../../constants/mockedData';
import { mockedDataPressureCity } from '../../constants/mockedCityData';
import { Card } from 'antd';

export const PressureChart: React.FC<ChartDefault> = ({ region }) => {
    const config = {
        data: region ? mockedDataPressureCity : mockedDataPressure,
        xField: 'type',
        yField: 'value',
    };
    return (
        <Card title='Статистика распределения по уровню давления'>
            <Column {...config} />
        </Card>
    );
};
