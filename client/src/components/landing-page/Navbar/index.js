import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import icon from "../../../assets/images/yinyang.png";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  NavLinksExternal,
} from "./NavBarElements";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#353535" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              Philosophypster
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/dashboard" onClick={closeMobileMenu}>
                  Dashboard
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinksExternal
                  href="https://github.com/Xaninho/Philosophypster"
                  onClick={closeMobileMenu}
                >
                  Github
                </NavLinksExternal>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/login">
                    <Button primary>Sign In</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/login">
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Sign In
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
