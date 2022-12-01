import React, { useState } from 'react'
import './index.scss';

import { Input } from 'antd';

const { Search } = Input;

interface Props{
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (text: string) => void;
}

const SearchInput: React.FC<Props> = ({search, setSearch, handleSubmit}) => {
    const [searching, setSearching] = useState<boolean>(false)

    const onSearch = () => {
        setSearching(true);
        handleSubmit(search);
        setTimeout(() => {
            setSearching(false);
        }, 2000);
    }

  return (

    <Search className='search_input' placeholder='Search your NFCe here' allowClear enterButton="Search" onSearch={onSearch} size='large'  loading={searching} onChange={(e) => setSearch(e.target.value)} />
    
  )
}

export default SearchInput