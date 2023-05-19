import React from 'react';
import { Bar } from '@ant-design/plots';
import { Card } from 'antd';
import { ChartDefault } from '../../types/chart';
import { mockedDataDiseasesChart } from '../../constants/mockedData';
import { mockedDiseasesChartCity } from '../../constants/mockedCityData';

export const DiseasesChart: React.FC<ChartDefault> = ({ region }) => {
    const config = {
        data: region ? mockedDiseasesChartCity : mockedDataDiseasesChart,
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
