import React, { useState } from 'react'
import './index.scss';

import { Input } from 'antd';

const { Search } = Input;

interface Props{
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (text: string) => void;
    searching: boolean;
}

const SearchInput: React.FC<Props> = ({search, setSearch, handleSubmit, searching}) => {
    

    const onSearch = () => {
      if(search === '') {
        return
      } else {
          handleSubmit(search);
      }
       
    }

  return (

    <Search className='search_input' placeholder='Search your NFCe here' allowClear={true} enterButton="Search" onSearch={onSearch} size='large'  loading={searching} onChange={(e) => setSearch(e.target.value)} />
    
  )
}

export default SearchInput