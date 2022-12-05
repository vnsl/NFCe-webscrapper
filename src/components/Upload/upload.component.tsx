import React, { useState } from "react";

import { message, } from 'antd';

// styles and images
import './upload.styles.scss';
import { UploadContentProps } from "../../models/upload.model";
import { accessSync } from "fs";

const UploadComponent: React.FC<UploadContentProps> = ({name, multiple, acceptType}) => {
    const [data, setData] = useState<any>();
    const [errorData, setErrorData] = useState<string | null>();

    const readFileOnUpload = (uploadedFile: any) =>{
        const fileReader: any = new FileReader();
        fileReader.onloadend = async ()=>{
            try{
                if(uploadedFile.type !== acceptType) {
                    throw 'Not Valid'
                }
              const data = await JSON.parse(fileReader.result) 
              
              setData(data);
              
              setErrorData(null)      
            }
            
            catch(e){
                alert()
                //setErrorData("**Not valid JSON file!**");
                
           }
        }
        if( uploadedFile!== undefined)
           fileReader.readAsText(uploadedFile);
     }

    return (
       <>
        <h1>Upload Json file - Example</h1>

        <input type="file"
        onChange={(e: any)=>readFileOnUpload(e.target.files[0])} />
        <br />
        {"uploaded file content -- " + data?.userName}
       </>
    )
}

export default UploadComponent;