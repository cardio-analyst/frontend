import React, { useState } from 'react';
import { FiltersContainer } from 'components/FiltersContainer/FiltersContainer';
import { FilterItem } from 'components/FilterItem/FilterItem';
import { SelectRegion } from 'components/SelectRegion/SelectRegion';
import { useAppSelector } from 'hooks/useAppSelector';
import { analyticsSelector } from '../../store/analyticsSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import styles from './AnalyticsFilters.module.scss';
import { fetchAnalytics } from '../../store/analyticsCreators';

interface AnalyticsFiltersProps {
    wrapperClassName?: string;
}

export const AnalyticsFilters: React.FC<AnalyticsFiltersProps> = ({
    wrapperClassName,
}) => {
    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector(analyticsSelector);

    const [region, setRegion] = useState<string | undefined>(undefined);

    return (
        <FiltersContainer
            isLoading={isLoading}
            wrapperClassName={wrapperClassName}
            onApply={handleOnApply}
        >
            <FilterItem title='Регионы'>
                <SelectRegion
                    defaultValue={{
                        value: '',
                        label: 'Все регионы',
                    }}
                    value={region}
                    onChange={setRegion}
                    wrapperClassname={styles.regions}
                />
            </FilterItem>
        </FiltersContainer>
    );

    function handleOnApply() {
        dispatch(fetchAnalytics(region));
    }
};
