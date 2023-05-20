import React from 'react';
import { Card, Descriptions } from 'antd';
import { DefaultDescription } from '../DefaultDesciption/DefaultDescription';

export const PersonalInfo = () => (
    <Card title='Личная информация'>
        <DefaultDescription>
            <Descriptions.Item label='ФИО'>
                Ермолин Георгий Константинович
            </Descriptions.Item>
            <Descriptions.Item label='Пол'>Мужской</Descriptions.Item>
            <Descriptions.Item label='Пол'>
                Hangzhou, Zhejiang
            </Descriptions.Item>
            <Descriptions.Item label='Дата рождения'>
                18.05.1972
            </Descriptions.Item>
            <Descriptions.Item label='Регион'>
                Челябинская область
            </Descriptions.Item>
        </DefaultDescription>
    </Card>
);
