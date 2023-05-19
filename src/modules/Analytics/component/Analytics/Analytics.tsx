import React, { useState } from 'react';
import { CitiesChart } from '../CitiesChart/CitiesChart';
import { DiseasesChart } from '../DiseasesChart/DiseasesChart';
import { RiskGroupChart } from '../RiskGroupChart/RiskGroupChart';
import { SelectRegion } from 'components/SelectRegion/SelectRegion';
import { PressureChart } from '../PressureChart/PressureChart';
import styles from './Analytics.module.scss';

interface AnalyticsProps {
    wrapperClassName?: string;
}

export const Analytics: React.FC<AnalyticsProps> = ({ wrapperClassName }) => {
    const [region, setRegion] = useState('');

    return (
        <div className={wrapperClassName}>
            <SelectRegion
                value={region}
                defaultValue={{
                    label: 'Все города',
                    value: '',
                }}
                wrapperClassname={styles.selectRegion}
                onChange={setRegion}
            />
            <div className={styles.wrapperCharts}>
                {!region && <CitiesChart />}
                <DiseasesChart region={region} />
                <RiskGroupChart region={region} />
                <PressureChart region={region} />
            </div>
        </div>
    );
};
