import React from 'react';
import { DatePicker, Form, Input } from 'antd';
import styles from './RegistrationStepTwo.module.scss';
import { SelectRegion } from 'components/SelectRegion/SelectRegion';
import dayjs from 'dayjs';

const REQUIRED_FIELD_TEXT = 'Поле обязательно к заполнению';

export const RegistrationStepTwo = () => (
    <>
        <Form.Item
            labelCol={{ span: 24 }}
            label='Имя'
            name='firstName'
            rules={[
                {
                    required: true,
                    message: REQUIRED_FIELD_TEXT,
                },
            ]}
        >
            <Input placeholder='Введите имя' />
        </Form.Item>
        <Form.Item
            labelCol={{ span: 24 }}
            label='Фамилия'
            name='lastName'
            rules={[
                {
                    required: true,
                    message: REQUIRED_FIELD_TEXT,
                },
            ]}
        >
            <Input placeholder='Введите фамилию' />
        </Form.Item>
        <Form.Item
            labelCol={{ span: 24 }}
            label='Отчество'
            name='middleName'
        >
            <Input placeholder='Введите отчество' />
        </Form.Item>
        <Form.Item
            labelCol={{ span: 24 }}
            label='Дата рождения'
            name='birthDate'
        >
            <DatePicker
                placeholder='01.12.1970'
                format='DD.MM.YYYY'
                className={styles.birthDay}
                disabledDate={(d) => !d || d.isAfter(dayjs())}
            />
        </Form.Item>
        <Form.Item
            labelCol={{ span: 24 }}
            label='Регион'
            name='region'
            className={styles.region}
        >
            <SelectRegion />
        </Form.Item>
    </>
);
