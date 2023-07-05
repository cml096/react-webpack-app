import React from 'react';
import logo from '@assets/logo-align-towards-spine.jpg';
import './Header.scss';
import {Link} from "react-router-dom";
import {AppRouter} from "../../routes/Router";

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <Link to={'/'}>
                    <img src={logo} alt="Logo" />
                    <h1>App Name</h1>
                </Link>
                <Link to={AppRouter.HOME}>Home</Link>
                <Link to={AppRouter.ABOUT}>About</Link>
            </nav>
        </header>
    );
};

export default Header;
