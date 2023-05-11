import React from 'react';
import { Form, Input } from 'antd';
import { InputPassword } from 'components/InputPassword';

const REQUIRED_FIELD_TEXT = 'Поле обязательно к заполнению';

export const RegistrationStepOne = () => (
    <>
        <Form.Item
            labelCol={{ span: 24 }}
            label='Логин'
            name='login'
            rules={[
                {
                    required: true,
                    message: REQUIRED_FIELD_TEXT,
                },
                {
                    pattern: /^[^@]+$/g,
                    message: 'В строке должен отсутствовать символ @',
                },
            ]}
        >
            <Input placeholder='Введите логин' />
        </Form.Item>
        <Form.Item
            labelCol={{ span: 24 }}
            label='Почта'
            name='email'
            rules={[
                {
                    required: true,
                    type: 'email',
                    message: REQUIRED_FIELD_TEXT,
                },
            ]}
        >
            <Input placeholder='Введите почту' />
        </Form.Item>
        <Form.Item
            labelCol={{ span: 24 }}
            label='Пароль'
            name='password'
            rules={[
                {
                    required: true,
                    message: REQUIRED_FIELD_TEXT,
                },
                {
                    min: 7,
                    message: 'Минимальная длина пароля - 7 символов',
                },
                {
                    max: 255,
                    message: 'Максимальная длина пароля - 255 символов',
                },
            ]}
        >
            <InputPassword placeholder='Введите пароль' />
        </Form.Item>
    </>
);
