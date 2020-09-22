import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { theme } from "../styles/theme"
import { Logo } from '../assets/svg/social'
import { Button, Container, Flex } from "../styles/globalStyles"

const Header = () => {

  return(
      // <HeaderNav>
      //   <HeaderContainer id="home">

      //     <LogoContainer>
      //       <Link to="/" aria-label="jamgoose">
      //         <Logo />
      //       </Link>
      //     </LogoContainer>

      //     <ButtonContainer>
      //       <button>
      //         Contact Us
      //       </button>
      //     </ButtonContainer> 

      //   </HeaderContainer>
      // </HeaderNav>

      <HeaderNav>
      <Container>
        <Flex spaceBetween noHeight>
        <LogoContainer>
            <Link to="/" aria-label="jamgoose">
              <Logo />
            </Link>
           </LogoContainer>
          <div>
            <Button>
              <Link to="/contact">
                <button>
                  Contact Us
                </button>
              </Link>
            </Button>
          </div>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header


export const HeaderNav = styled.div`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
  background: ${theme.colors.background};
`

// const HeaderNav = styled.div`
//   position: absolute;
//   height: 0px;
//   top: 0;
//   width: 100%;
//   padding: 20px 0;
//   z-index: 9;

// `

// const HeaderContainer = styled.div`
//   position: relative;
//   align-items: center;
//   display: flex;
//   justify-content: space-between;

// `
const LogoContainer = styled.div`

    svg {
      width: 50px;
      height: 50px;
      fill: ${theme.colors.primary};
      transition: ${theme.transitions.default};

      &:hover {
        cursor: pointer;
        fill: ${theme.colors.accent};
      }
    }
  
`

// const ButtonContainer = styled.div`

// `