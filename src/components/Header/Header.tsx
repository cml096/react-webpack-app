import React from 'react';
import logo from '@assets/logo-align-towards-spine.jpg';
import './Header.scss';

const Header: React.FC = () => {
    return (
        <header>
            <img src={logo} alt="Logo" />
            <h1>App Name</h1>
        </header>
    );
};

export default Header;
