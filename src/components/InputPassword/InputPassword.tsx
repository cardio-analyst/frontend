import React from 'react';
import {
    EyeInvisibleOutlined,
    EyeOutlined,
} from './icons';
import { Input, InputRef } from 'antd';
import { PasswordProps } from 'antd/es/input';

type InputPasswordProps = PasswordProps & React.RefAttributes<InputRef>;

export const InputPassword: React.FC<InputPasswordProps> = ({...props}) => (
    <Input.Password
        placeholder='Введите пароль'
        iconRender={(visible) =>
            visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
        }
        {...props}
    />
);
