import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, Hamburger, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './Navbar.styles';

const Navbar = ({ toggle }) => {
    return(
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>IEEE MBCET</NavLogo>
                    <Hamburger onClick={toggle}>
                        <FaBars />
                    </Hamburger>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='home'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='aboutus'>About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='team'>Team</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='events'>Events</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='more'>More</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/contactus">Contact Us</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};
export default Navbar;