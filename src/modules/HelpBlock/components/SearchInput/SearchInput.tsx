import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Option, SearchInputProps } from './types';

import './style.scss';
import { getSearchValues } from './helpers';

export const SearchInput: React.FC<SearchInputProps> = ({ setActiveTab, setOpenKeys }) => {
  const [options, setOptions] = useState<Option[]>([]);

  const handleSearch = (value: string) => {
    setOptions(getSearchValues(value));
  };

  // @ts-ignore
  const onSelect = (_, option: Option) => {
    const [section, value] = option.key.split(';');

    setActiveTab(`${section}${value}`);
    setOpenKeys([section]);
  };

  return (
    <div className='search_input_wrapper'>
      <AutoComplete
        className='search_input'
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
      >
        <Input
          suffix={<SearchOutlined style={{ fontSize: '20px' }} />}
          placeholder='Введите название параметра'
          allowClear
        />
      </AutoComplete>
    </div>
  );
};
