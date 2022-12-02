import React from "react";
import './index.scss';
import { Descriptions } from 'antd';

const SummaryTable: React.FC<any> = ({storeName, date, numberitems, totalValue, taxesPaid, code}) => {
    return (
        <Descriptions title="NFCe Summary">
            <Descriptions.Item label="Store">{storeName}</Descriptions.Item>
            <Descriptions.Item label="Date">{date}</Descriptions.Item>
            <Descriptions.Item label="NFCe Code">{code}</Descriptions.Item>
            <Descriptions.Item label="Items">{numberitems}</Descriptions.Item>
            <Descriptions.Item label="Total">{totalValue} R$</Descriptions.Item>
            <Descriptions.Item label="Taxes">{taxesPaid} R$</Descriptions.Item>
        </Descriptions>
    )
}

export default SummaryTable;