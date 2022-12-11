export interface UserProps {
    userName: string;
    createdDate: number;
    updatedDate: number;
    country: string;
    email: string;
    nfceData: NFCeProps[] | any[]
}

export interface NFCeProps {
    code: string;
    storeName: string;
    data: string;
    numberItems: number;
    totalValue: number;
    taxesPaid: number;
    items: NFCeItem[];
    uploaded?: EpochTimeStamp;
}

interface NFCeItem {
    item: string;
    totalValue: number;
    key: number;
    quantity: number;
    unitaryValue: number;
}
