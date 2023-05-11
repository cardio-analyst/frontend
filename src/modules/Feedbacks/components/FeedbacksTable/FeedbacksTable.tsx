import React from 'react';
import { Table } from 'antd';
import { getColumnsData } from './FeedbacksTableData';
import { Feedback } from '../../model/Feedback';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { changeReadStatus } from '../../store/feedbackCreators';
import { useAppSelector } from 'hooks/useAppSelector';
import { feedbackSelector } from '../../store/feedbackSelector';

interface ReviewsTableProps {
    reviews: Feedback[];
    onRowClick: (review: Feedback) => void;
}

export const FeedbacksTable: React.FC<ReviewsTableProps> = ({
    reviews,
    onRowClick,
}) => {
    const dispatch = useAppDispatch();
    const { isLoading, isChangingReadStatus } =
        useAppSelector(feedbackSelector);

    const columns = getColumnsData(onChangeReadStatus);

    return (
        <Table
            columns={columns}
            dataSource={reviews}
            loading={isLoading || isChangingReadStatus}
            onRow={(record) => {
                return {
                    onClick: () => onRowClick(record),
                };
            }}
        />
    );

    function onChangeReadStatus(feedbackId: string) {
        dispatch(changeReadStatus(feedbackId));
    }
};
