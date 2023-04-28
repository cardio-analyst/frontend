import React from 'react';
import { Form, Input } from 'antd';

const REQUIRED_FIELD_TEXT = 'Поле обязательно к заполнению';

export const RegistrationStepThree = () => (
    <>
        <Form.Item
            labelCol={{ span: 24 }}
            label='Секретный ключ'
            name='"secretKey'
            rules={[
                {
                    required: true,
                    message: REQUIRED_FIELD_TEXT,
                },
            ]}
        >
            <Input placeholder='Ввведите секретный ключ' />
        </Form.Item>
    </>
)
