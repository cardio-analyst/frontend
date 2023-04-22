import React, { useEffect } from 'react';
import { Table } from 'antd';
import { userSelector } from '../store/userSelector';
import { useAppSelector } from 'hooks/useAppSelector';
import { fetchUsers } from '../store/userCreators';
import { useAppDispatch } from 'hooks/useAppDispatch';

const columns = [
    {
        title: 'Имя',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'Фамилия',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'Регион',
        dataIndex: 'region',
        key: 'region',
    },
    {
        title: 'Логин',
        dataIndex: 'login',
        key: 'login',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
];

export const UsersTable: React.FC = () => {
    const dispatch = useAppDispatch();
    const { isLoading, users } = useAppSelector(userSelector);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return <Table dataSource={users} columns={columns} />;
};
