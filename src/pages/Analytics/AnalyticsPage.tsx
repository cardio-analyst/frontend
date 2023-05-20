import React from 'react';
import { PageLayout } from 'components/PageLayout';
import { Analytics } from 'modules/Analytics';
import styles from './AnalyticsPage.module.scss';

const AnalyticsPage = () => (
    <PageLayout title='Аналитика'>
        <Analytics wrapperClassName={styles.analyticsBlock} />
    </PageLayout>
);

export default AnalyticsPage;
