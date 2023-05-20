import React, { useEffect } from 'react';
import { Table } from 'antd';
import { userSelector } from '../../store/userSelector';
import { useAppSelector } from 'hooks/useAppSelector';
import { fetchUsers } from '../../store/userCreators';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { columns } from './UsersTableData';
import { useNavigate } from 'react-router-dom';
import { routes } from 'routes';
import { limitData } from 'constants/limit';

export const UsersTable: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigate();

    const { isLoading, users, totalPages } = useAppSelector(userSelector);

    useEffect(() => {
        dispatch(
            fetchUsers({
                page: 1,
                limit: limitData,
            }),
        );
    }, []);

    return (
        <Table
            loading={isLoading}
            dataSource={users}
            columns={columns}
            pagination={{
                defaultPageSize: limitData,
                pageSize: limitData,
                total: totalPages * limitData,
                onChange: handleOnChangePage,
            }}
            onRow={(record) => {
                return {
                    onClick: () => handleClickRow(record.id),
                };
            }}
        />
    );

    function handleClickRow(id: number) {
        navigation(routes.users, {
            state: {
                userId: id,
            },
        });
    }

    function handleOnChangePage(page: number, pageSize: number) {
        dispatch(
            fetchUsers({
                page: page,
                limit: pageSize,
            }),
        );
    }
};
