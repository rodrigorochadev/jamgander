import styled, { css } from "styled-components"
import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const Padding = styled.div`
    margin: 50px 0;
`


export const SectionTitle = styled.div`
    margin-bottom: 60px;
`

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 10vw;
  position: relative;
  width: auto;
  height: 100%;

  @media (min-width: 1024px) {
    padding: 0 32px;
    max-width: 960px;
  }

  @media (min-width: 1216px) {
    max-width: 1152px;
  }

  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      background: red;
      max-width: 100% !important;
    `}
`

const styles = () => `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        ::-moz-selection { /* Code for Firefox */
            color: ${theme.colors.background};
            background: ${theme.colors.accent};
        }
        
        ::selection {
            color: ${theme.colors.background};
            background: ${theme.colors.accent};
        }
    }
    
    h1, h2, h3, h4, h5 {
        color: ${theme.colors.primary};
        font-family: ${theme.fontFamilies.headings};
    }

    button {
        padding: 15px 25px;
        border: none;
        border-radius: 20px;
        background: ${theme.colors.accent};
        color: black;
        font-size: 1.1rem;
        transition: ${theme.transitions.default};
        font-weight: bold;
        z-index: 10;
        
        &:hover {
            cursor: pointer;
            transform: scale(1.1);
        }
    }

    body {
        overflow-x: hidden;
        color: ${theme.colors.secondary};
        font-size: ${theme.fontSizes.base};
        font-family: ${theme.fontFamilies.regular};
        background: ${theme.colors.background};

        @media ${theme.media.small} {
            font-size: ${theme.fontSizes.base};
        }

        @media ${theme.media.medium} {
            font-size: ${theme.fontSizes.medium};
        }

        @media ${theme.media.large} {
            font-size: ${theme.fontSizes.large};
        }

        @media ${theme.media.xlarge} {
            font-size: ${theme.fontSizes.xlarge};
        }

        @media ${theme.media.xxlarge} {
            font-size: ${theme.fontSizes.xxlarge};
        }
    }
`
    

export const GlobalStyle = createGlobalStyle`
    ${styles()}
`;