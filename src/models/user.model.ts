export interface UserProps {
    userName: string;
    createdDate: number;
    updatedDate: number;
    country: string;
    email: string;
    nfceData?: NFCeProps[]
}

export interface NFCeProps {
    code: string;
    storeName: string;
    data: string;
    numberItems: number;
    totalValue: number;
    taxesPaid: number;
    items: NFCeItem[]
}

interface NFCeItem {
    item: string;
    totalValue: number;
    key: number;
    quantity: number;
    unitaryValue: number;
}
