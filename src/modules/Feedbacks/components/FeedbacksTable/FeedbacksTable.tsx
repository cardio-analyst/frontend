import React from 'react';
import { Table } from 'antd';
import { getColumnsData } from './FeedbacksTableData';
import { Feedback } from '../../model/Feedback';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { changeViewStatus } from '../../store/feedbackCreators';
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
    const { isLoading, isLoadingViewStatus } =
        useAppSelector(feedbackSelector);

    const columns = getColumnsData(onChangeReadStatus);

    return (
        <Table
            columns={columns}
            dataSource={reviews}
            loading={isLoading || isLoadingViewStatus}
            onRow={(record) => {
                return {
                    onClick: () => onRowClick(record),
                };
            }}
        />
    );

    function onChangeReadStatus(feedbackId: number) {
        dispatch(changeViewStatus(feedbackId));
    }
};
