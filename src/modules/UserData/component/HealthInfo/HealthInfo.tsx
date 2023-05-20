import React from 'react';
import { Card, Descriptions } from 'antd';
import { DefaultDescription } from '../DefaultDesciption/DefaultDescription';

export const HealthInfo = () => (
    <Card title='Информация о здоровье'>
        <DefaultDescription>
            <Descriptions.Item label='Курение'>Нет</Descriptions.Item>
            <Descriptions.Item label='Прием статинов'>Да</Descriptions.Item>
            <Descriptions.Item label='Предрасположенность к ССЗ'>
                Генетическая предрасположенность
            </Descriptions.Item>
            <Descriptions.Item label='Риск сердечно-сосудистых событий'>
                11%
            </Descriptions.Item>
            <Descriptions.Item label='Уровень систолического АД'>
                165 мм.рт.ст.
            </Descriptions.Item>
            <Descriptions.Item label='Общий холестерин'>
                4,8 ммоль/л
            </Descriptions.Item>
        </DefaultDescription>
    </Card>
);
