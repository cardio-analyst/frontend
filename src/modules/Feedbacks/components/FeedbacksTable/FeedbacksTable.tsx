import React from 'react';
import { Table } from 'antd';
import { getColumnsData } from './FeedbacksTableData';
import { Feedback } from '../../model/Feedback';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { changeViewStatus, fetchFeedbacks } from '../../store/feedbackCreators';
import { useAppSelector } from 'hooks/useAppSelector';
import { feedbackSelector } from '../../store/feedbackSelector';
import { limitData } from 'constants/limit';

interface ReviewsTableProps {
    reviews: Feedback[];
    onRowClick: (review: Feedback) => void;
}

export const FeedbacksTable: React.FC<ReviewsTableProps> = ({
    reviews,
    onRowClick,
}) => {
    const dispatch = useAppDispatch();
    const { isLoading, isLoadingViewStatus, totalPages, viewed, versionOrdering, markOrdering } =
        useAppSelector(feedbackSelector);

    const columns = getColumnsData(onChangeReadStatus);

    return (
        <Table
            columns={columns}
            dataSource={reviews}
            loading={isLoading || isLoadingViewStatus}
            pagination={{
                defaultPageSize: limitData,
                pageSize: limitData,
                total: totalPages * limitData,
                onChange: handleOnChangePage,
            }}
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

    function handleOnChangePage(page: number, pageSize: number) {
        dispatch(
            fetchFeedbacks({
                page: page,
                limit: pageSize,
                viewed: viewed || undefined,
                versionOrdering: versionOrdering || undefined,
                markOrdering: markOrdering || undefined,
            }),
        );
    }
};
