import { ColumnsType } from 'antd/es/table';
import { Rate, Typography } from 'antd';
import { Review } from '../../model/Review';

const { Paragraph } = Typography;

export const columns: ColumnsType<Review> = [
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
        title: 'Логин',
        dataIndex: 'login',
        key: 'login',
    },
    {
        title: 'Комментарий',
        key: 'message',
        dataIndex: 'message',
        width: '30%',
        render: (_, record) => (
            <Paragraph ellipsis={{ rows: 2, expandable: false }}>
                {record.message}
            </Paragraph>
        ),
    },
    {
        title: 'Оценка',
        key: 'mark',
        render: (_, record) => <Rate disabled defaultValue={record.mark} />,
    },
];
