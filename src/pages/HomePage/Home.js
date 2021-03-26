import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import VMSection from '../../components/VMSection';
import JoinSection from '../../components/JoinSection';
import TeamSection from '../../components/TeamSection';
import SocietySection from '../../components/SocietySection';
import Footer from '../../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection/>
            <AboutSection />
            <VMSection />
            <JoinSection />
            <TeamSection />
            <SocietySection />
            <Footer />
        </>
    )
}

export default Home;