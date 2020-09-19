import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/globalStyles'
import { theme } from '../styles/theme'
import Img from 'gatsby-image'
import scrollTo from 'gatsby-plugin-smoothscroll';



import jamgoose from '../assets/images/logo.svg'

const Footer = () => {

    const data = useStaticQuery(graphql`
        query SocialQuery {
            allMarkdownRemark(
                sort: {fields: frontmatter___id}
                filter: {frontmatter: {type: {eq: "social"}}}) {
                edges {
                    node {
                        frontmatter {
                            name
                            id
                            url
                            image {
                                childImageSharp {
                                    fixed(width: 25) {
                                        ...GatsbyImageSharpFixed_tracedSVG
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    return(
        <FooterContainer>
        <Container>
            <FooterSection>
                <FooterBrand>
                    <button style={{padding: 0, background: 0}} onClick={() => scrollTo('#home')}>
                        <img src={jamgoose} alt="jamgander" style={{width: '50px', height: '50px'}}/>
                    </button>
                </FooterBrand>
            </FooterSection>
            
            <FooterContent>

                <FooterSection>
                    <h3>Quick Links</h3>
                    <FooterNavigation>
                        
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Portfolio</Link></li>
                            <li><Link to="/">Contacts</Link></li>
                        </ul>
                    </FooterNavigation>

                </FooterSection>
                
                <FooterSection>
                    <h3>Social</h3>
                    <FooterSocial>
                        {data.allMarkdownRemark.edges.map(
                            social => {
                                return(
                                    <FooterImgWrapper>
                                        <a href={social.node.frontmatter.url} rel="noreferrer" target="_blank">
                                            <Img fixed={social.node.frontmatter.image.childImageSharp.fixed} alt={social.node.frontmatter.name} />
                                        </a>
                                    </FooterImgWrapper>
                                )
                            }
                        )}
                    </FooterSocial>
                </FooterSection>
            </FooterContent>
            <FooterCopyright>
                JAMGANDER © {new Date().getFullYear()}. All rights reserved.
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

    h3 {
        margin-bottom: 10px;
    }
    
`

export const FooterCopyright = styled.div`
    text-align: left;
`

export const FooterBrand = styled.div`
    text-align: left;

    img {
        filter: invert(100%);

        &:hover {
            filter: ${theme.filters.filterToAccent};
            cursor: pointer;
        }
    }
`

export const FooterNavigation = styled.div`

    ul {
        list-style: none;
    }

    a {
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

    picture {
        margin-right: 30px;

        &::last-child {
            margin-right: 0px;
        }

        
    }
`

export const FooterImgWrapper = styled.div`
    margin-right: 30px;
    filter: invert(100%);

    &:hover {
        cursor: pointer;
        filter: ${theme.filters.filterToAccent};
    }
`

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h3 {
        font-family: 'Poppins';
        font-weight: bold;
        color: white;
    }

    a {
        text-decoration: none;
        color: white;
    }
`