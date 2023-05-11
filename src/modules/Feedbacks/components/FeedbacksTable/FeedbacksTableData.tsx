import { ColumnsType } from 'antd/es/table';
import {Checkbox, Rate, Typography} from 'antd';
import { Feedback } from '../../model/Feedback';

import styles from './FeedbacksTable.module.scss';

import { formatCreatedDate } from '../../constants/feedback';

import dayjs from 'dayjs';

dayjs();

const { Paragraph, Text } = Typography;

export function getColumnsData(
    changeReadStatus: (feedbackId: string) => void,
): ColumnsType<Feedback> {
    return [
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
            dataIndex: 'createdAt',
            render: (_, record) => (
                <Text>{dayjs(record.createdAt).format(formatCreatedDate)}</Text>
            ),
        },
        {
            title: 'Прочитано',
            key: 'isReaded',
            align: 'center',
            render: (_, record) => (
                <Checkbox
                    value={false}
                    onClick={(event) => {
                        event.stopPropagation();
                        // TODO add feedback id.
                        changeReadStatus('');
                    }}
                />
            ),
        },
    ];
}
