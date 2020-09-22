import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { theme } from "../styles/theme"
import { Logo } from '../assets/svg/social'

const Header = () => {

  return(
    <HeaderContainer id="home">
      <LogoContainer>
        <Link to="/" aria-label="jamgoose">
          <Logo />
        </Link>
      </LogoContainer>       
    </HeaderContainer>
    
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9;

`
const LogoContainer = styled.div`

    svg {
      width: 40px;
      height: 40px;
      fill: #000;
      transition: ${theme.transitions.default};

      &:hover {
        cursor: pointer;
        fill: ${theme.colors.accent};
      }
    }
  
`