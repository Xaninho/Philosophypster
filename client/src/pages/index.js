import React, { useState } from 'react'
import Sidebar from '../components/Landing-Sidebar'
import Navbar from '../components/Landing-Navbar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
        </div>
    )
}

export default Home;