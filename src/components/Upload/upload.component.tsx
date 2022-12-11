import React, { useContext, useState } from "react";

import { Button } from 'antd';

// styles and images
import './upload.styles.scss';
import { UploadContentProps } from "../../models/upload.model";

const UploadComponent: React.FC<UploadContentProps> = ({name, multiple, acceptType, cancelButton, submitButton, onSubmit, onCancel}) => {
    const [data, setData] = useState<any>();
    const [upload, setUpload] = useState<boolean>(false);
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

     function handleSubmit(data: any): void {
        return onSubmit(data);
     }

     function handleCancel() {

     }

    return (
       <>
        <h1>Upload Json file</h1>

        <input type="file"
        onChange={(e: any)=>readFileOnUpload(e.target.files[0])} />
        <br />
        {upload && <div>
            <h1>Welcome back {data?.userName}</h1>
            {cancelButton && <Button htmlType="submit" onClick={() => {handleCancel()}}>
                {cancelButton}
            </Button>}
            <Button htmlType="submit" onClick={() => {handleSubmit(data)}}>
                {submitButton}
            </Button>
        </div>}
       </>
    )
}

export default UploadComponent;