const DownloadService = {
    downloadFile ({ data, fileName, fileType }: any) {
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
    },

    exportToJson (jsonContent: any, fileFinalName: string) {
        this.downloadFile({
          data: JSON.stringify(jsonContent),
          fileName: fileFinalName+'.json',
          fileType: 'text/json',
        })
    }
}

export default DownloadService;