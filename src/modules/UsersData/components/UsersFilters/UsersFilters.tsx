import React from 'react';
import { fetchUsers } from '../../store/userCreators';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { userSelector } from '../../store/userSelector';
import { Filters } from 'components/Filters/Filters';
import { UsersAllParams } from '../../api/types';

interface UsersFiltersProps {
    wrapperClassName?: string;
}

export const UsersFilters: React.FC<UsersFiltersProps> = ({
    wrapperClassName,
}) => {
    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector(userSelector);

    return (
        <Filters
            onApply={handleApplyFilters}
            wrapperClassName={wrapperClassName}
            isLoading={isLoading}
        />
    );

    function handleApplyFilters(params: UsersAllParams) {
        dispatch(fetchUsers(params));
    }
};
