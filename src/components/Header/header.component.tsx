import React, { ReactComponentElement } from 'react';
import { NavLink } from 'react-router-dom';
import AvatarComponent from '../Avatar/avatar.component';

// styles and images
import './header.styles.scss';

const Header: React.FC = () => {
    return (
        <div className='header'>
            <AvatarComponent className='avatar'></AvatarComponent>
            <nav className='navbar'>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/Dashboard">Dashboard</NavLink>
                <NavLink to="/About">About</NavLink>
            </nav>
        </div>
    )
}

export default Header;