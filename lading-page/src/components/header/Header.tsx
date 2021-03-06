import React, { useState } from 'react';
import { IMAGES_HEADER } from '../../constant/ImagesConstant';
import DarkMode from '../darkMode/DarkMode';
import './styles/header.scss';

Header.propTypes = {

};

function Header(props) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const Logo = IMAGES_HEADER.Logo;
    const CloseMenu = IMAGES_HEADER.CloseMenu;
    const MenuIcon = IMAGES_HEADER.MenuIcon;

    return (
        <div className="header">
            <div className="logo-nav">
                <div className="logo-container">
                    <a href="#">
                        <Logo className="logo" />
                    </a>
                </div>
                <ul className={click ? 'nav-options active' : 'nav-options'}>
                    <li className="option" onClick={closeMobileMenu}>
                        <DarkMode />
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">Become a host</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">Help</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">Sign up</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">Log in</a>
                    </li>
                </ul>
            </div>


            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon" />
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </div>
        </div>
    );
}

export default Header;


