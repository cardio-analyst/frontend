import React, { useEffect, useMemo } from 'react';
import { Typography } from 'antd';
import { CitiesChart } from '../CitiesChart/CitiesChart';
import { DiseasesChart } from '../DiseasesChart/DiseasesChart';
import { CardioAgeChart } from '../CardioAgesChart/CardioAgeChart';
import { PressureChart } from '../PressureChart/PressureChart';
import { AnalyticsFilters } from '../AnalyticsFilters/AnalyticsFilters';
import { useAppSelector } from 'hooks/useAppSelector';
import { analyticsSelector } from '../../store/analyticsSelector';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { fetchAnalytics } from '../../store/analyticsCreators';
import styles from './Analytics.module.scss';

const { Title } = Typography;

interface AnalyticsProps {
    wrapperClassName?: string;
}

export const Analytics: React.FC<AnalyticsProps> = ({ wrapperClassName }) => {
    const dispatch = useAppDispatch();
    const {
        usersByRegions,
        sbpByUsers,
        cardiovascularAgesRangesByUsers,
        diseasesByUsers,
    } = useAppSelector(analyticsSelector);

    useEffect(() => {
        dispatch(fetchAnalytics());
    }, []);

    const isEmptyData = useMemo(() => {
        return (
            !usersByRegions &&
            !diseasesByUsers &&
            !cardiovascularAgesRangesByUsers &&
            !sbpByUsers
        );
    }, [
        usersByRegions,
        diseasesByUsers,
        cardiovascularAgesRangesByUsers,
        sbpByUsers,
    ]);

    return (
        <div className={wrapperClassName}>
            <AnalyticsFilters wrapperClassName={styles.selectRegion} />
            <div className={styles.wrapperCharts}>
                {!!usersByRegions && <CitiesChart />}
                {!!diseasesByUsers && <DiseasesChart />}
                {!!cardiovascularAgesRangesByUsers && <CardioAgeChart />}
                {!!sbpByUsers && <PressureChart />}
            </div>
            {isEmptyData && (
                <div className={styles.emptyBlock}>
                    <Title level={5}>Необходимые данные не найдены</Title>
                </div>
            )}
        </div>
    );
};
