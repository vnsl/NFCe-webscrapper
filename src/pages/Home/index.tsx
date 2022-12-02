import './index.scss';

import SearchInput from '../../components/SearchInput';
import React, { useState } from 'react';
import TableItems from '../../components/Table';
import DownloadCSV from '../../components/DownloadCSV';
import { Collapse } from 'antd';
import SummaryTable from '../../components/SummaryTable';
import Notifications from '../../components/Notifications';

const { Panel } = Collapse;

const  Home: React.FC = () => {
    const [search, setSearch] = useState<string>('');
    const [searching, setSearching] = useState<boolean>(false)
    const [itemsList, setItemsList] = useState<any>([])
    const [summary, setSummary] = useState<any>()

    const onSearch = async (text: string) => {
        const send = {NFCeCode: text};

        try {
            setSearching(true);
            const response = await fetch('https://nfce-api.herokuapp.com/', {
                method: 'POST',
                body: JSON.stringify(send),
                headers: {
                    'Content-type': 'application/json',
                }
            })
            
            console.log(response)
            if(!response.ok) {
                const message = await response.json()
                throw message.message
            }
            
            const dados = await response.json();
            setItemsList(dados.items);
            setSummary(dados);
            
        } catch (error) {
            //alert(error)
            <Notifications/>
        }
        setSearching(false);

    } 

    return (
        <div className="search-container">
            <h1>NFCe Automatic Item Finder</h1>
            <SearchInput search={search} setSearch={setSearch} handleSubmit={onSearch} searching={searching}/>
            
            {itemsList.length > 0 && 
                <Collapse defaultActiveKey={1}>
                    <Panel header="Summary" key="1">
                        <DownloadCSV fileContent={summary} fileFinalName={summary.storeName+summary.date} json={true} />
                        <SummaryTable storeName={summary.storeName} date={summary.date} numberitems={summary.numberitems} totalValue={summary.totalValue} taxesPaid={summary.taxesPaid} code={summary.code}></SummaryTable>
                    </Panel>
                    <Panel header='Items List' key="2">
                        <DownloadCSV fileContent={itemsList} fileFinalName={summary.storeName+summary.date} csv={true} />
                        <TableItems itemsList={itemsList} />
                    </Panel>
                </Collapse>}
        </div>
    );
}

export default Home;