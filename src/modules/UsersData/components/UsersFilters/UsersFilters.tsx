import React from 'react';
import { fetchUsers } from '../../store/userCreators';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { userSelector } from '../../store/userSelector';
import { RangeValue } from 'rc-picker/lib/interface';
import { Dayjs } from 'dayjs';
import { DatePicker } from 'antd';
import { SelectRegion } from 'components/SelectRegion/SelectRegion';
import { FiltersContainer } from 'components/FiltersContainer/FiltersContainer';
import { FilterItem } from 'components/FilterItem/FilterItem';
import styles from './UsersFilters.module.scss';
import { limitData } from 'constants/limit';
import actions from '../../store/userActions';

const { RangePicker } = DatePicker;

interface UsersFiltersProps {
    wrapperClassName?: string;
}

const birthDayFormat = 'DD.MM.YYYY';

export const UsersFilters: React.FC<UsersFiltersProps> = ({
    wrapperClassName,
}) => {
    const dispatch = useAppDispatch();
    const {changedRegion, changedBirthDateFrom, changedBirthDateTo} = actions;
    const { isLoading, region, birthDateFrom, birthDateTo } = useAppSelector(userSelector);

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
                    onChange={(value) => dispatch(changedRegion(value))}
                    wrapperClassname={styles.regions}
                />
            </FilterItem>
            <FilterItem title='Дата рождения'>
                <RangePicker
                    placeholder={['От', 'До']}
                    onChange={handleDates}
                />
            </FilterItem>
        </FiltersContainer>
    );

    function handleDates(dates: RangeValue<Dayjs>) {
        if (dates) {
            const birthDateFromInit = dates[0]?.format(birthDayFormat);
            const birthDateToInit = dates[1]?.format(birthDayFormat);

            dispatch(changedBirthDateTo(birthDateToInit));
            dispatch(changedBirthDateFrom(birthDateFromInit));
        } else {
            if (birthDateTo) {
                dispatch(changedBirthDateTo(undefined));
            }
            if (birthDateFrom) {
                dispatch(changedBirthDateFrom(undefined));
            }
        }
    }

    function handleOnApply() {
        dispatch(
            fetchUsers({
                region,
                birthDateFrom,
                birthDateTo,
                page: 1,
                limit: limitData,
            }),
        );
    }
};
