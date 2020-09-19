import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
// import { theme } from "../styles/theme"

import jamgoose from '../assets/images/logo.svg'
import { Container } from "../styles/globalStyles"
import { theme } from "../styles/theme"
// import { Container } from "../styles/globalStyles"

const Header = () => {

  return(
    <HeaderContainer>
        <Logo id="home">
          <Link to="/" ><img src={jamgoose} alt="jamgander" /> </Link>
        </Logo>
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

const Logo = styled.div`
  
  a {
    img {
      width: 40px;
      height: 40px;

      &:hover {
        cursor: pointer;
        filter: ${theme.filters.filterToAccent};
      }
    }
  }

`
