import React, { useContext, useState } from 'react';

// imports
import { Button } from 'antd';

// styles and images
import './upload-nfce-button.styles.scss';

const UploadNfceButton: React.FC<any> = ({handleSubmit}) => {
    const [data, setData] = useState<any>();
    const [upload, setUpload] = useState<boolean>(false);
    const [errorData, setErrorData] = useState<string | null>();

    const readFileOnUpload = (uploadedFile: any) =>{
        const fileReader: any = new FileReader();
        fileReader.onloadend = async ()=>{
            try{
                if(uploadedFile.type !== 'application/json') {
                    throw 'Not Valid'
                }
              const data = await JSON.parse(fileReader.result) 
              
                data.uploaded = Date.now();

              setData(data);
              setUpload(true);
              setErrorData(null)      
            }
            
            catch(e){
                alert(errorData)
                //setErrorData("**Not valid JSON file!**");
                
           }
        }
        if( uploadedFile!== undefined)
           fileReader.readAsText(uploadedFile);
     }
     
     const handleClick = () => {
        handleSubmit(data);
     }
    
  return (
    <div className='upload-button'>
      <Button><input type="file"
        onChange={(e: any)=>readFileOnUpload(e.target.files[0])} /></Button>
        {data && <Button onClick={() => handleClick()}>Upload</Button>}
    </div>
  )
}

export default UploadNfceButton;