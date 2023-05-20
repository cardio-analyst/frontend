import React, { useEffect, useState } from 'react';
import { FeedbacksTable } from '../FeedbacksTable/FeedbacksTable';
import { Feedback } from '../../model/Feedback';
import { ModalFeedback } from '../ModalFeedback/ModalFeedback';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { feedbackSelector } from '../../store/feedbackSelector';
import { fetchFeedbacks } from '../../store/feedbackCreators';
import { FeedbacksFilters } from '../FeedbacksFilters/FeedbacksFilters';
import styles from './Feedback.module.scss';
import { limitData } from 'constants/limit';

export const Feedbacks = () => {
    const dispatch = useAppDispatch();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedFeedback, setSelectedFeedback] = useState<Feedback>();

    const { feedbacks } = useAppSelector(feedbackSelector);

    useEffect(() => {
        dispatch(
            fetchFeedbacks({
                page: 1,
                limit: limitData,
            }),
        );
    }, []);

    return (
        <div className={styles.feedbacks}>
            <FeedbacksFilters wrapperClassName={styles.filters} />
            <FeedbacksTable reviews={feedbacks} onRowClick={handleRowClick} />
            <ModalFeedback
                isModalOpen={isModalOpen}
                handleOk={handleCloseModal}
                feedback={selectedFeedback}
            />
        </div>
    );

    function handleRowClick(review: Feedback) {
        setSelectedFeedback(review);
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }
};
