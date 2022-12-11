import React, { createContext, MouseEventHandler, ReactNode, useState } from 'react';
import { UserProps } from '../../models/user.model';

interface AuthProps {
    user: UserProps;
    signIn: (user: UserProps) => any;
    signOut: () => void;
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
        setUser(guestUser);
    };
    
    return (
        <AuthContext.Provider value={{user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;