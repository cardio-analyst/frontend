import React from 'react';
import { Bar } from '@ant-design/plots';
import { Card } from 'antd';
import {useAppSelector} from '../../../../hooks/useAppSelector';
import {analyticsSelector} from '../../store/analyticsSelector';

export const DiseasesChart = () => {
    const { diseasesByUsers } = useAppSelector(analyticsSelector);
    const config = {
        data: diseasesByUsers || [],
        xField: 'value',
        yField: 'disease',
        seriesField: 'disease',
    };
    return (
        <Card title='Статистика по заболеваниям'>
            <Bar {...config} />
        </Card>
    );
};
