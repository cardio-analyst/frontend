import React, { useMemo } from 'react';
import { Feedback } from '../../model/Feedback';
import { Modal, Rate, Typography } from 'antd';
import styles from './ModalFeedback.module.scss';
import dayjs from 'dayjs';
import { formatCreatedDate } from '../../constants/feedback';

const { Title, Paragraph, Text } = Typography;

interface ModalReviewProps {
    isModalOpen: boolean;
    handleOk: () => void;
    feedback?: Feedback;
}

export const ModalFeedback: React.FC<ModalReviewProps> = ({
    feedback,
    isModalOpen,
    handleOk,
}) => {
    const fullName = useMemo(() => {
        return `${feedback?.userFirstName} ${feedback?.userLastName} ${feedback?.userMiddleName}`;
    }, [
        feedback?.userFirstName,
        feedback?.userLastName,
        feedback?.userMiddleName,
    ]);

    return (
        <Modal
            open={isModalOpen}
            width={800}
            closable={false}
            onOk={handleOk}
            cancelButtonProps={{ style: { display: 'none' } }}
            okButtonProps={{style: {width: '15%'}}}
        >
            <div className={styles.modalContainer}>
                <div>
                    <Title level={5}>ФИО</Title>
                    <Text>{fullName}</Text>
                </div>
                <div className={styles.info}>
                    <Title level={5}>Почта</Title>
                    <Text>{feedback?.userEmail}</Text>
                </div>
                <div className={styles.info}>
                    <Title level={5}>Логин</Title>
                    <Text>{feedback?.userLogin}</Text>
                </div>
                <div className={styles.info}>
                    <Title level={5}>Дата написания</Title>
                    <Text>
                        {dayjs(feedback?.createdAt).format(formatCreatedDate)}
                    </Text>
                </div>
                <div className={styles.info}>
                    <Title level={5}>Оценка</Title>
                    <Text>
                        <Rate disabled value={feedback?.mark} />
                    </Text>
                </div>
                <div className={styles.info}>
                    <Title level={5}>Комментарий</Title>
                    <Paragraph
                        ellipsis={{
                            rows: 2,
                            expandable: true,
                            symbol: 'Показать',
                        }}
                    >
                        {feedback?.message}
                    </Paragraph>
                </div>
            </div>
        </Modal>
    );
};
