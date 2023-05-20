import React from 'react';
import { Select } from 'antd';
import { regions } from './constants/regions';
import { DefaultOptionType } from 'antd/es/select';

const options: DefaultOptionType[] = regions.map((item) => ({
    label: item,
    value: item,
}));

interface SelectRegionProps {
    value?: string;
    onChange?: (region: string) => void;
    defaultValue?: DefaultOptionType;
    wrapperClassname?: string;
}

export const SelectRegion: React.FC<SelectRegionProps> = ({
    value,
    onChange,
    defaultValue,
    wrapperClassname
}) => (
    <Select
        options={defaultValue ? [defaultValue, ...options] : options}
        placeholder='Выберите регион'
        value={value}
        onChange={onChange}
        className={wrapperClassname}
    />
);
