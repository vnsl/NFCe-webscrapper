import React, { useState } from 'react'
import './index.scss';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

interface DataType {
    key: React.Key;
    item: string;
    quantity: number;
    totalValue: number;
    unitaryValue: number;
    type: string;
}

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
            }
        },
    ]

    const data: DataType[] = itemsList;

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };

    return (
        <Table className='table-container' columns={columns} dataSource={data} onChange={onChange} pagination={false} scroll={{y: '70vh'}}/>
    )
}

export default TableItems