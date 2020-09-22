import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Container, NonStyledButton } from '../styles/globalStyles'
import { theme } from '../styles/theme'
import scrollTo from 'gatsby-plugin-smoothscroll';

import { Instagram, Messenger, Facebook, Dribbble, Behance, Logo } from '../assets/svg/social'

const Footer = () => {

    return(
        <FooterContainer>
        <Container>
            <FooterSection>
                <FooterBrand>
                    <NonStyledButton>
                        <button aria-label="jamgoose" onClick={() => scrollTo('#home')}>
                            <Logo />
                        </button>
                    </NonStyledButton>
                    
                </FooterBrand>
            </FooterSection>
            
            <FooterContent>

                <FooterSection>
                    <h2>Quick Links</h2>
                    <FooterNavigation>
                        
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Portfolio</Link></li>
                            <li><Link to="/">Contacts</Link></li>
                        </ul>
                    </FooterNavigation>

                </FooterSection>
                
                <FooterSection>
                    <h2>Social</h2>
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

// Styles

export const FooterContainer = styled.div`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: 30px 0;
`

export const FooterSection = styled.div`
    margin-bottom: 30px;

    h2 {
        margin-bottom: 10px;
    }
    
`

export const FooterCopyright = styled.div`
    text-align: left;
`

export const FooterBrand = styled.div`
    text-align: left;

    svg:hover {
        transition: ${theme.transitions.default};
        fill: ${theme.colors.accent};
        cursor: pointer;
    }
`

export const FooterNavigation = styled.div`

    ul {
        list-style: none;
    }

    a {
        line-height: 2rem;
        &:hover {
            cursor: pointer;
            transition: ${theme.transitions.default};
            color: ${theme.colors.accent};
        }
    }
`

export const FooterSocial = styled.div`

    display: flex;
    flex-wrap: wrap;

    a {
        margin-right: 30px;
    

        svg:hover {
            transition: ${theme.transitions.default};
            fill: ${theme.colors.accent};
            cursor: pointer;
        }

        

        &::last-child {
            margin-right: 0px;
        }
    }
`

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        color: white;
    }

    a {
        text-decoration: none;
        color: white;
    }
`