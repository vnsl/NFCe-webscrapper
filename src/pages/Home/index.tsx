import './index.scss';

import SearchInput from '../../components/SearchInput';
import React, { useState } from 'react';
import TableItems from '../../components/Table';

const  Home: React.FC = () => {
    const [search, setSearch] = useState<string>('');
    const [itemsList, setItemsList] = useState<any>([])


    const onSearch = async (text: string) => {
        const send = {NFCeCode: text}
        const resposta = await fetch('https://nfce-api.herokuapp.com/', {
            method: 'POST',
            body: JSON.stringify(send),
            headers: {
                'Content-type': 'application/json',
            }
        })

        const dados = await resposta.json();
        setItemsList(dados)
    } 

    return (
        <div className="search-container">
            <h1>NFCe Automatic Item Finder</h1>
            <SearchInput search={search} setSearch={setSearch} handleSubmit={onSearch}/>
            {itemsList.length > 0 && <TableItems itemsList={itemsList}/>}
        </div>
    );
}

export default Home;