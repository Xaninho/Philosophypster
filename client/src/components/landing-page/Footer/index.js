import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
  FooterLinkItems,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterLinkScroll,
  FooterLinkExternal,
} from "./FooterElements";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Website</FooterLinkTitle>
              <FooterLinkScroll
                onClick={toggleHome}
                smooth={true}
                duration={500}
              >
                Home
              </FooterLinkScroll>
              <FooterLinkScroll to="discover" smooth={true} duration={500}>
                Discover
              </FooterLinkScroll>
              <FooterLinkScroll to="services" smooth={true} duration={500}>
                Techical Info
              </FooterLinkScroll>
              <FooterLink to="/register">Register</FooterLink>
              <FooterLink to="/login">Login</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Github</FooterLinkTitle>
              <FooterLinkExternal
                href="https://github.com/Xaninho"
                target="_blank"
              >
                Xaninho
              </FooterLinkExternal>
              <FooterLinkExternal
                href="https://github.com/Xaninho/Philosophypster"
                target="_blank"
              >
                Code
              </FooterLinkExternal>
              <FooterLinkExternal
                href="https://github.com/Xaninho/Philosophypster/pulls"
                target="_blank"
              >
                Pull Requests
              </FooterLinkExternal>
              <FooterLinkExternal
                href="https://github.com/Xaninho/Philosophypster/wiki"
                target="_blank"
              >
                Wiki
              </FooterLinkExternal>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contacts</FooterLinkTitle>
              <FooterLinkExternal
                href="https://www.linkedin.com/in/xaninho-dev/"
                target="_blank"
              >
                LinkedIn
              </FooterLinkExternal>
              <FooterLinkExternal
                href="https://github.com/Xaninho"
                target="_blank"
              >
                Github
              </FooterLinkExternal>
              <FooterLinkExternal href="//www.twitter.com" target="_blank">
                Twitter
              </FooterLinkExternal>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Philosophypster
            </SocialLogo>
            <WebsiteRights>
              Philosophypster © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
