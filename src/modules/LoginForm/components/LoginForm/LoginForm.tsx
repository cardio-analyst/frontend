import React from 'react';
import { Form, Typography, Button, Input } from 'antd';

import { useAppSelector } from 'hooks/useAppSelector';
import { authSelector } from '../../store/authSelector';

import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { signInCreator } from '../../store/authCreators';
import { useNavigate } from 'react-router-dom';
import { routes } from 'routes';

import styles from './LoginForm.module.scss';

import { InputPassword } from 'components/InputPassword';
import { FormContainer } from 'components/FormContainer';

const { Paragraph } = Typography;

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

    const redirectToRegister = () => navigation(routes.registration);

    return (
        <FormContainer
            title='Авторизация'
            wrapperClassName={styles.sizeForm}
        >
            <Form
                name='login'
                form={form}
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
                    <InputPassword placeholder='Введите пароль' />
                </Form.Item>
                {error && (
                    <Paragraph className={styles.error}>
                        Неправильный логин и/или пароль
                    </Paragraph>
                )}
                <div className={styles.submitBlock}>
                    <Button
                        type='primary'
                        htmlType='submit'
                        loading={isLoading}
                    >
                        Войти
                    </Button>
                    <Button
                        type='ghost'
                        disabled={isLoading}
                        className={styles.registerBtn}
                        onClick={redirectToRegister}
                    >
                        Регистрация
                    </Button>
                </div>
            </Form>
        </FormContainer>
    );
};
