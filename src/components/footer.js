import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';

import { Container, NonStyledButton } from '../styles/globalStyles'
import { FooterContainer, FooterSection, FooterCopyright, FooterBrand, FooterSocial, FooterContent } from '../styles/componentStyles'

import { Instagram, Messenger, Facebook, Dribbble, Behance, Logo } from '../assets/svg/social'

const Footer = () => {

    return(
        <FooterContainer id="footer">
        <Container>
            <FooterContent>
                <FooterSection>
                    <FooterBrand>
                        <NonStyledButton>
                            <button aria-label="jamgoose" onClick={() => scrollTo('#home')}>
                                <Logo />
                            </button>
                        </NonStyledButton>
                        
                    </FooterBrand>
                </FooterSection>

                <FooterSection>
                    
                    <FooterSocial>
                        <a href="https://instagram.com/pathfinderdesigns" rel="noreferrer" target="_blank" aria-label="Instagram">
                            <Instagram />
                        </a>
                        
                        <a href="https://facebook.com/pathfinderdesigns" rel="noreferrer" target="_blank" aria-label="Facebook">
                            <Facebook />
                        </a>
                        
                        <a href="https://m.me/pathfinderdesigns" rel="noreferrer" target="_blank" aria-label="Messenger">
                            <Messenger />
                        </a>
                    
                        <a href="https://behance.net/rodrigo-rocha" rel="noreferrer" target="_blank" aria-label="Behance">
                            <Behance />
                        </a>
                    
                        <a href="https://dribbble.com/rodrigorocha" rel="noreferrer" target="_blank" aria-label="Dribbble">
                            <Dribbble />
                        </a>
                        
                    </FooterSocial>
                </FooterSection>
            
                
            </FooterContent>
            
            <FooterCopyright>
                JAMGOOSE © {new Date().getFullYear()}. All rights reserved.
            </FooterCopyright>
        </Container>
        </FooterContainer>
        
    )
}

export default Footer
