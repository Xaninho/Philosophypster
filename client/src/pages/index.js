import React, { useState } from 'react'
import Sidebar from '../components/Landing-Sidebar'
import Navbar from '../components/Landing-Navbar';
import HeroSection from '../components/Landing-HeroSection';
import InfoSection from '../components/Landing-InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/Landing-InfoSection/Data';
import Services from '../components/Landing-Services'
import Footer from '../components/Landing-Footer';

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