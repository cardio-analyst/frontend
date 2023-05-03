import React from 'react';
import { Table } from 'antd';
import { columns } from './FeedbacksTableData';
import { Feedback } from '../../model/Feedback';

interface ReviewsTableProps {
    reviews: Feedback[];
    onRowClick: (review: Feedback) => void;
}

export const FeedbacksTable: React.FC<ReviewsTableProps> = ({
    reviews,
    onRowClick,
}) => (
    <Table
        columns={columns}
        dataSource={reviews}
        onRow={(record) => {
            return {
                onClick: () => onRowClick(record),
            };
        }}
    />
);
