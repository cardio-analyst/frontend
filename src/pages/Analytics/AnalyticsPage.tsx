import React from 'react';
import { PageLayout } from 'components/PageLayout';
import { CitiesChart } from 'modules/CitiesChart';
import { DiseasesChart } from 'modules/DiseasesChart';
import { RiskGroupChart } from 'modules/RiskGroupChart';
import styles from './AnalyticsPage.module.scss';

const AnalyticsPage = () => (
    <PageLayout title='Аналитика'>
        <div className={styles.wrapper}>
            <CitiesChart />
            <DiseasesChart />
            <RiskGroupChart />
        </div>
    </PageLayout>
);

export default AnalyticsPage;
