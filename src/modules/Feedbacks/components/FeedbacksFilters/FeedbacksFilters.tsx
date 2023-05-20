import React from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { Select } from 'antd';
import { FiltersContainer } from 'components/FiltersContainer/FiltersContainer';
import { FilterItem } from 'components/FilterItem/FilterItem';
import { feedbackSelector } from '../../store/feedbackSelector';
import { fetchFeedbacks } from '../../store/feedbackCreators';
import { DefaultOptionType } from 'antd/es/select';
import styles from './FeedbacksFilters.module.scss';
import { limitData } from 'constants/limit';
import actions from '../../store/feedbackActions';

interface FeedbacksFiltersProps {
    wrapperClassName?: string;
}

const optionsSorted: DefaultOptionType[] = [
    {
        label: 'Не выбрано',
        value: '',
    },
    {
        label: 'По возврастанию',
        value: 'ASC',
    },
    {
        label: 'По убыванию',
        value: 'DESC',
    },
];

const optionsView: DefaultOptionType[] = [
    {
        label: 'Не выбрано',
        value: '',
    },
    {
        label: 'Просмотрено',
        value: 'true',
    },
    {
        label: 'Не просмотрено',
        value: 'false',
    },
];

export const FeedbacksFilters: React.FC<FeedbacksFiltersProps> = ({
    wrapperClassName,
}) => {
    const dispatch = useAppDispatch();
    const { changedMarkOrdering, changedVersionOrdering, changedViewed } = actions;
    const { isLoading, viewed, markOrdering, versionOrdering } = useAppSelector(feedbackSelector);

    return (
        <FiltersContainer
            isLoading={isLoading}
            wrapperClassName={wrapperClassName}
            onApply={handleOnApply}
        >
            <FilterItem title='Версия'>
                <Select
                    options={optionsSorted}
                    defaultValue={''}
                    placeholder='Выберите сортировку'
                    value={versionOrdering}
                    onChange={(value) => dispatch(changedVersionOrdering(value))}
                    className={styles.filter}
                />
            </FilterItem>
            <FilterItem title='Оценка'>
                <Select
                    options={optionsSorted}
                    defaultValue={''}
                    placeholder='Выберите сортировку'
                    value={markOrdering}
                    onChange={(value) => dispatch(changedMarkOrdering(value))}
                    className={styles.filter}
                />
            </FilterItem>
            <FilterItem title='Статус просмотра'>
                <Select
                    options={optionsView}
                    defaultValue={''}
                    placeholder='Выберите статус просмотра'
                    value={viewed}
                    onChange={(value) => dispatch(changedViewed(value))}
                    className={styles.filter}
                />
            </FilterItem>
        </FiltersContainer>
    );

    function handleOnApply() {
        dispatch(
            fetchFeedbacks({
                viewed: viewed || undefined,
                versionOrdering: versionOrdering || undefined,
                markOrdering: markOrdering || undefined,
                page: 1,
                limit: limitData,
            }),
        );
    }
};
