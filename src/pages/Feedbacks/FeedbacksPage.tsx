import React from 'react';
import { PageLayout } from 'components/PageLayout';
import { Feedbacks } from 'modules/Feedbacks';

const FeedbacksPage = () => (
    <PageLayout title='Отзывы'>
        <Feedbacks />
    </PageLayout>
);

export default FeedbacksPage;
