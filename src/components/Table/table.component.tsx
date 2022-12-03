import React from 'react'
// models
import { DataType } from "../../models";
// imports
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
// styles and images
import './table.styles.scss';

const TableItems: React.FC<any> = ({itemsList}) => {
    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'item',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            sorter: {
                compare: (a,b) => a.quantity - b.quantity,
                multiple: 1
            }
        },
        {
            title: 'Unitary Value',
            dataIndex: 'unitaryValue',
            sorter: {
                compare: (a,b) => a.unitaryValue - b.unitaryValue,
                multiple: 1
            }
        },
        {
            title: 'Total Value',
            dataIndex: 'totalValue',
            sorter: {
                compare: (a,b) => a.totalValue - b.totalValue,
                multiple: 1
            }
        },
        {
            title: 'Type',
            dataIndex: 'type',
            sorter: {
                compare: (a,b) => a.totalValue - b.totalValue,
                multiple: 1
            },
        },
    ]

    const data: DataType[] = itemsList;

    

    return (
        <Table className='table-container' columns={columns} dataSource={data}  pagination={false} scroll={{y: '70vh'}} size='small'/>
    )
}

export default TableItems;