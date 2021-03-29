import React from "react";
import { Button } from "../../globalStyles";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaBriefcase,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterLinkExternal,
} from "./FooterElements";

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          This is an experimental meme project, no real world usage is intended
        </FooterSubHeading>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Website</FooterLinkTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/dashboard">Dashboard</FooterLink>
            <FooterLink to="/register">Register</FooterLink>
            <FooterLink to="/login">Login</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Github</FooterLinkTitle>
            <FooterLinkExternal to="https://github.com/Xaninho">
              Xaninho
            </FooterLinkExternal>
            <FooterLinkExternal to="https://github.com/Xaninho/Xaninho">
              Code
            </FooterLinkExternal>
            <FooterLinkExternal to="https://github.com/Xaninho/pulls">
              Pull Requests
            </FooterLinkExternal>
            <FooterLinkExternal to="https://github.com/Xaninho/wiki">
              Wiki
            </FooterLinkExternal>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contacts</FooterLinkTitle>
            <FooterLinkExternal to="https://www.alexandreneves.tech">
              Portfolio
            </FooterLinkExternal>
            <FooterLinkExternal to="https://www.linkedin.com/in/alexandre-hacker/">
              LinkedIn
            </FooterLinkExternal>
            <FooterLinkExternal to="https://github.com/Xaninho">
              Github
            </FooterLinkExternal>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">Philosophypster</SocialLogo>
          <WebsiteRights>Philosophypster © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Portfolio">
              <FaBriefcase />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Github">
              <FaGithub />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
