import React, { HTMLAttributes, TdHTMLAttributes } from 'react';
import { Table } from 'antd';
import { columns } from './ReviewsTableData';
import { Review } from '../../model/Review';

interface ReviewsTableProps {
    reviews: Review[];
    onRowClick: (review: Review) => void;
}

export const ReviewsTable: React.FC<ReviewsTableProps> = ({
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
