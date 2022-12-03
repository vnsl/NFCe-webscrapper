import React, { ReactComponentElement } from 'react';
import { NavLink } from 'react-router-dom';

// styles and images
import './header.styles.scss';

const Header: React.FC = () => {
    return (
        <div className='header'>
            <nav className='navbar'>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/Dashboard">Dashboard</NavLink>
                <NavLink to="/About">About</NavLink>
            </nav>
        </div>
    )
}

export default Header;