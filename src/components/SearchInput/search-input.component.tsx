import React, { useState } from 'react';
// imports
import { Input } from 'antd';
// models
import { SearchInputProps } from '../../models';
// styles and images
import './search-input.styles.scss';

const { Search } = Input;

const SearchInput: React.FC<SearchInputProps> = ({search, setSearch, handleSubmit, searching}) => {
    
    const onSearch = (value: string) => {
      if(value === '') {
        return
      } else {
        handleSubmit(value);
      }
    }

  return (
    <Search className='search_input' placeholder='Search your NFCe here' allowClear enterButton="Search" onSearch={onSearch} size='large'  loading={searching} />
  )
}

export default SearchInput