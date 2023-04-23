import React from 'react';
import { Form, Typography, Button, Input } from 'antd';

import { useAppSelector } from 'hooks/useAppSelector';
import { authSelector } from '../../store/authSelector';
import { EyeOutlined, EyeInvisibleOutlined } from '../../icons';

import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { signInCreator } from '../../store/authCreators';
import { useNavigate } from 'react-router-dom';
import { routes } from 'routes';

import styles from './LoginForm.module.scss';

const { Title, Paragraph } = Typography;

const REQUIRED_FIELD_TEXT = 'Поле обязательно к заполнению';

interface FormData {
    login: string;
    password: string;
}

export const LoginForm = () => {
    const { isLoading, error } = useAppSelector(authSelector);
    const dispatch = useAppDispatch();

    const navigation = useNavigate();

    const [form] = Form.useForm();

    const onFinish = ({ login, password }: FormData) => {
        dispatch(
            signInCreator({
                loginOrEmail: login,
                password: password,
                onSuccess: () => navigation(routes.help),
            }),
        );
    };

    return (
        <div className={styles.loginFormContainer}>
            <Title level={3} className={styles.title}>
                Cardio Analytics Admin
            </Title>
            <Form
                name='login'
                form={form}
                className={styles.form}
                onFinish={onFinish}
            >
                <Form.Item
                    labelCol={{ span: 24 }}
                    label='Логин'
                    name='login'
                    rules={[
                        {
                            required: true,
                            message: REQUIRED_FIELD_TEXT,
                        },
                    ]}
                >
                    <Input disabled={isLoading} placeholder='Введите логин' />
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
                    ]}
                >
                    <Input.Password
                        placeholder='Введите пароль'
                        disabled={isLoading}
                        iconRender={(visible) =>
                            visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                        }
                    />
                </Form.Item>
                <div className={styles.submitBlock}>
                    {error && (
                        <Paragraph className={styles.error}>
                            Неправильный логин и/или пароль
                        </Paragraph>
                    )}
                    <Button
                        type='primary'
                        htmlType='submit'
                        loading={isLoading}
                    >
                        Войти
                    </Button>
                </div>
            </Form>
        </div>
    );
};
