import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import { cardObjOne } from '../../components/Card/cardData.js';
import Card from '../../components/Card';

const UpcomingEvents = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Card {...cardObjOne} />
            <Footer />
        </>
    )
}

export default UpcomingEvents;