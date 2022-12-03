export interface DataType {
  key: React.Key;
  item: string;
  quantity: number;
  totalValue: number;
  unitaryValue: number;
  type: string;
}

export type DownloadFileProps = {
  fileFinalName: string; 
  jsonContent?: {};
  tabContent?: any[];
}