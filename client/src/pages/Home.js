import React, { useState } from "react";

import Navbar from "../components/landing-page/Navbar";
import InfoSection from "../components/landing-page/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/landing-page/InfoSection/Data";
import Services from "../components/landing-page/Services";
import Footer from "../components/landing-page/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggle={toggle} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </div>
  );
};

export default Home;
