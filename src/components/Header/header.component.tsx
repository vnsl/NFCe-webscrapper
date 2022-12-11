import { Button } from 'antd';
import React, { ReactComponentElement, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/Auth/AuthProvider';
import AvatarComponent from '../Avatar/avatar.component';
import UploadNFCE from '../UploadNfce/upload-nfce.component';

// styles and images
import './header.styles.scss';

const Header: React.FC = () => {
    const { user, signOut } = useContext(AuthContext);
    return (
        <div className='header'>
            <div className='avatar'>
                <AvatarComponent ></AvatarComponent>
                {user.userName !== 'Guest' && <Button onClick={() => signOut()}>Logout</Button>}
            </div>
            <nav className='navbar'>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/Dashboard">Dashboard</NavLink>
                <NavLink to="/About">About</NavLink>
            </nav>
            <UploadNFCE></UploadNFCE>
        </div>
    )
}

export default Header;