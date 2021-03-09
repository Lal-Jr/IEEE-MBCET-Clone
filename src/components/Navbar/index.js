import React, { useState } from 'react';
import { FaBars, FaCaretDown } from 'react-icons/fa';
import { Hamburger } from './Navbar.styles.js';
// import { Link as LinkS } from 'react-scroll';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from '../Dropdown/index';

function Navbar({ toggle }) {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img src={0} alt="Logo" class="img-fluid"/>
            </Link>
            <Hamburger onClick={toggle}>
                <FaBars />
            </Hamburger>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
            </Link>
            </li>
            <li className='nav-item'>
            <Link
                to='/aboutus'
                className='nav-links'
                onClick={closeMobileMenu}
            >
                About Us
            </Link>
            </li>
            <li className='nav-item'>
            <Link
                to='/team'
                className='nav-links'
                onClick={closeMobileMenu}
            >
                Team
            </Link>
            </li>
            <li className='nav-item'>
            <Link
                to='/events'
                className='nav-links'
                onClick={closeMobileMenu}
            >
                Events
            </Link>
            </li>
            <li
                className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
            <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
            >
                            More         
                <FaCaretDown/>
            </Link>
                {dropdown && <Dropdown />}
            </li>
            <li className='nav-item'>
            <Link
                to='/events'
                className='nav-links'
                onClick={closeMobileMenu}
            >
                Contact Us
            </Link>
            </li>
            </ul>
        </nav>
        </>
    );
}

export default Navbar;