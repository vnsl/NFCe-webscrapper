import React from 'react';
import { Button } from 'antd';
import './index.scss';

type DownloadCSVProps = {
  jsonContent: {};
  tabContent: any[];
  fileFinalName: string; 
  tab?: boolean;
  json?: boolean; 
}

const DownloadCSV: React.FC<DownloadCSVProps> = ({jsonContent, tabContent, fileFinalName, tab, json } ) => {

    const downloadFile = ({ data, fileName, fileType }: any) => {
        const blob = new Blob([data], { type: fileType })
      
        const a = document.createElement('a')
        a.download = fileName
        a.href = window.URL.createObjectURL(blob)
        const clickEvt = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true,
        })
        a.dispatchEvent(clickEvt)
        a.remove()
      }

      const exportToJson = (e: any) => {
        e.preventDefault()
        downloadFile({
          data: JSON.stringify(jsonContent),
          fileName: fileFinalName+'.json',
          fileType: 'text/json',
        })
      }

      const exportToTab = (e: any) => {
        e.preventDefault()
      
        // Headers for each column
        const headers = ['Item\tQuantity\tTotal Value\tUnitary Value']
      
        // Convert users data to a csv
        const usersCsv: any[] = tabContent.reduce((acc: any, user: any) => {
          const { item, quantity, totalValue, unitaryValue } = user
          acc.push([item, quantity, totalValue, unitaryValue].join('\t'))
          return acc
        }, [])
      
        downloadFile({
          data: [...headers, ...usersCsv].join('\n'),
          fileName: fileFinalName+'.tab',
          fileType: 'text/tab',
        })
      }



    return (
        <div className='buttonDownload'>
            {json && <Button onClick={exportToJson}>Download JSON</Button>}
            {tab && <Button onClick={exportToTab}>Download Tab</Button>}
        </div>
    )
}

export default DownloadCSV;