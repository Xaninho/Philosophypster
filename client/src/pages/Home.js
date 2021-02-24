import React, { useState } from 'react'

import Navbar from '../components/landing-page/Navbar';
import Sidebar from '../components/landing-page/Sidebar'
import HeroSection from '../components/landing-page/HeroSection';
import InfoSection from '../components/landing-page/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/landing-page/InfoSection/Data';
import Services from '../components/landing-page/Services'
import Footer from '../components/landing-page/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </div>
    )
}

export default Home;