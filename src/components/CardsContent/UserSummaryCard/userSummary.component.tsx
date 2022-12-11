import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/Auth/AuthProvider';
// imports
import { NFCeProps } from '../../../models/user.model';
import DateService from '../../../services/date.service';

// styles and images
import './userSummary.styles.scss';

const UserSummary: React.FC<any> = () => {
    const { user } = useContext(AuthContext);

    const uploadedNFCE = (nfceData: NFCeProps[]) => {
        const baseTimeStamp = new Date().setDate(new Date().getDate() - 30);

        if(nfceData.length === 0 ){
            return 0
        }
        
        const uploadedNFCE = nfceData.filter(nfce => baseTimeStamp < nfce.uploaded!);

        return uploadedNFCE.length
    }

  return (
    <>
        <p>{user.userName}</p>
        <p>Created on: {DateService.convertTimeStamp(user.createdDate, 'USA')}</p>
        <p>Updated on: {DateService.convertTimeStamp(user.updatedDate, 'USA')}</p>
        <p>Number of NFCes: {user.nfceData.length}</p>
        <p>NFCes uploaded on last 30 days: {uploadedNFCE(user.nfceData)}</p>
    </>
  )
}

export default UserSummary;