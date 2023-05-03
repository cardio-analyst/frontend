import { ColumnsType } from 'antd/es/table';
import { Rate, Typography } from 'antd';
import { Feedback } from '../../model/Feedback';

import styles from './FeedbacksTable.module.scss';

import dayjs from 'dayjs';
import { formatCreatedDate } from '../../constants/feedback';

const { Paragraph, Text } = Typography;

export const columns: ColumnsType<Feedback> = [
    {
        title: 'Имя',
        dataIndex: 'userFirstName',
        key: 'userFirstName',
    },
    {
        title: 'Фамилия',
        dataIndex: 'userLastName',
        key: 'userLastName',
    },
    {
        title: 'Логин',
        dataIndex: 'userLogin',
        key: 'userLogin',
    },
    {
        title: 'Комментарий',
        key: 'message',
        dataIndex: 'message',
        width: '30%',
        render: (_, record) => (
            <Paragraph
                ellipsis={{ rows: 2, expandable: false }}
                className={styles.messageColumn}
            >
                {record.message}
            </Paragraph>
        ),
    },
    {
        title: 'Оценка',
        key: 'mark',
        dataIndex: 'mark',
        render: (_, record) => <Rate disabled defaultValue={record.mark} />,
    },
    {
        title: 'Дата написания',
        key: 'createdAt',
        render: (_, record) => (
            <Text>{dayjs(record.createdAt).format(formatCreatedDate)}</Text>
        ),
    },
];

dayjs();
