import React, { useMemo } from 'react';
import { Review } from '../../model/Review';
import { Modal, Rate, Typography } from 'antd';
import styles from './ModalReview.module.scss';

const { Title, Paragraph, Text } = Typography;

interface ModalReviewProps {
    isModalOpen: boolean;
    handleOk: () => void;
    review?: Review;
}

export const ModalReview: React.FC<ModalReviewProps> = ({
    review,
    isModalOpen,
    handleOk,
}) => {
    console.log('REVIEW', review);
    const fullName = useMemo(() => {
        return `${review?.firstName} ${review?.lastName} ${review?.middleName}`;
    }, [review?.firstName, review?.lastName, review?.middleName]);

    return (
        <Modal
            open={isModalOpen}
            width={700}
            closable={false}
            onOk={handleOk}
            cancelButtonProps={{ style: { display: 'none' } }}
        >
            <div className={styles.modalContainer}>
                <div>
                    <Title level={5}>ФИО</Title>
                    <Text>{fullName}</Text>
                </div>
                <div className={styles.info}>
                    <Title level={5}>Почта</Title>
                    <Text>{review?.email}</Text>
                </div>
                <div className={styles.info}>
                    <Title level={5}>Логин</Title>
                    <Text>{review?.login}</Text>
                </div>
                <div className={styles.info}>
                    <Title level={5}>Оценка</Title>
                    <Text>
                        <Rate disabled value={review?.mark} />
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
                        {review?.message}
                    </Paragraph>
                </div>
            </div>
        </Modal>
    );
};
