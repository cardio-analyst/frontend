import React from 'react';
import { Pie } from '@ant-design/plots';
import { Card } from 'antd';
import { ChartDefault } from '../../types/chart';
import { mockedDataRiskGroupChart } from '../../constants/mockedData';
import { mockedDataRiskGroupCity } from '../../constants/mockedCityData';

export const RiskGroupChart: React.FC<ChartDefault> = ({ region }) => {
    const config = {
        appendPadding: 10,
        data: region ? mockedDataRiskGroupCity : mockedDataRiskGroupChart,
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
