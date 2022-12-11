import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth/AuthProvider';
import { PlusOutlined } from '@ant-design/icons';


// imports
import { Button, Popover } from 'antd';

// styles and images
import './upload-nfce.styles.scss';
import UploadNfceButton from './UploadNfceButton/upload-nfce-button';
import { NFCeProps } from '../../models/user.model';

const UploadNFCE: React.FC<any> = () => {
    const { user, setUser } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const uploadNFCE = (NFCeProps: NFCeProps) => {
    const userNFCe = user.nfceData;
    userNFCe.push(NFCeProps);
    setUser({...user, nfceData: userNFCe})
  }
    
  return (
    <>
        {user.userName !== 'Guest' && 
            <Popover
            className='upload-container'
            content={
                <div className='popover-content'>
                    <button>Code</button>
                    <UploadNfceButton handleSubmit={uploadNFCE}></UploadNfceButton>
                </div>
            }
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
            placement="leftTop"
            >
            <Button className='rounded-button' type='primary'><PlusOutlined /></Button>
            </Popover>
        
        }
    
    </>
  )
}

export default UploadNFCE;