import React from 'react';
import { Card, Descriptions } from 'antd';
import { DefaultDescription } from '../DefaultDesciption/DefaultDescription';

export const Lifestyle = () => (
    <Card title='Образ жизни'>
        <DefaultDescription>
            <Descriptions.Item label='Семейное положение'>
                Женат
            </Descriptions.Item>
            <Descriptions.Item label='Участие в социально-культурных мероприятиях'>
                Один раз в неделю
            </Descriptions.Item>
            <Descriptions.Item label='Физическая активность'>
                Тренировка более одного раза в неделю
            </Descriptions.Item>
            <Descriptions.Item label='Работа'>Безработный</Descriptions.Item>
            <Descriptions.Item label='Симптомы стенокардии'>
                Нет симптомов
            </Descriptions.Item>
            <Descriptions.Item label='Приверженность'>
                Средний
            </Descriptions.Item>
        </DefaultDescription>
    </Card>
);
