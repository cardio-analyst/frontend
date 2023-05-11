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
}

export const SelectRegion: React.FC<SelectRegionProps> = ({
    value,
    onChange,
}) => (
    <Select
        options={options}
        placeholder='Выберите регион'
        value={value}
        onChange={onChange}
    />
);
