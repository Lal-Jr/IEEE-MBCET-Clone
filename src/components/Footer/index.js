import React from 'react';
import './Footer.css';
// import { Button } from '../Button/Button.styles';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import logo from "../../images/mbcet.png"

function Footer() {
    return (
        <div className='footer-container'>
            {/* <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join our exclusive membership to receive the latest news and trends
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section> */}
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Useful Link</h2>
                        <LinkR to='/'>Home</LinkR>
                        <LinkS to='/'>About Us</LinkS>
                        <LinkS to='/'>Events</LinkS>
                        <LinkS to='/'>Gallery</LinkS>
                        <LinkS to='/'>Team</LinkS>
                    </div>
                    <div className='contact'>
                        <h2>Contact Us</h2>
                        <p>MBCET</p>
                        <p>Nalanchira PO, 695015</p>
                        <p>Trivandrum, Kerala, India</p>
                        <p>Phone: +91 8086010528 (Chair Person)</p>
                        <p>Email: ieeesb@mbcet.ac.in</p>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <LinkR to='/' className='social-logo'>
                            <img src={logo} alt="Logo" />
                        </LinkR>
                    </div>
                    <small className='website-rights'>MBCET©2021</small>
                    <div className='social-icons'>
                        <LinkR
                            className='social-icon-link1'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <FaFacebook />
                        </LinkR>
                        <LinkR
                            className='social-icon-link2'
                            to='/'
                            aria-label='Instagram'
                        >
                            <FaInstagram />
                        </LinkR>
                        <LinkR
                            className='social-icon-link3'
                            to='/'
                            aria-label='Twitter'
                        >
                            <FaTwitter />
                        </LinkR>
                        <LinkR
                            className='social-icon-link4'
                            to='/'
                            aria-label='LinkedIn'
                        >
                            <FaLinkedin />
                        </LinkR>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;