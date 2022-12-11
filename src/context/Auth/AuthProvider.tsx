import React, { createContext, MouseEventHandler, ReactNode, useState } from 'react';
import { NFCeProps, UserProps } from '../../models/user.model';
import DownloadService from '../../services/download.service';

interface AuthProps {
    user: UserProps;
    setUser: React.Dispatch<React.SetStateAction<UserProps>>;
    signIn: (user: UserProps) => any;
    signOut: () => void;
    addNFCe: (NFCeProps: NFCeProps) => void;
}

export const AuthContext = createContext<AuthProps>(null!);

interface ProviderProps {
    children: ReactNode
}

function AuthProvider ({children}: ProviderProps) {
    const guestUser: UserProps = {
        userName: 'Guest',
        createdDate: Date.now(),
        updatedDate: Date.now(),
        country: '',
        email: '',
        nfceData: []
    };

    const [user, setUser] = useState<UserProps>(guestUser);

    const signIn = (userData: UserProps) => {
        setUser(userData);
        return true;
    };

    const signOut = () => {
        if(user.userName !== 'Guest') {
            DownloadService.exportToJson(user, user.userName);
        }
        setUser(guestUser);
    };

    const addNFCe = (NFCeProps: NFCeProps) => {
        user.nfceData.push(NFCeProps);
        setUser(user);
    }
    
    return (
        <AuthContext.Provider value={{user, setUser, signIn, signOut, addNFCe}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;