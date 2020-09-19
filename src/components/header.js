import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import { theme } from "../styles/theme"

import jamgoose from '../assets/images/logo.svg'
// import { Container } from "../styles/globalStyles"

const Header = () => {

  return(
    <header
      style={{
        position: 'absolute',
        top: 0,
        width: '100vw',
        padding: '20px 0',
        // background: `${theme.colors.accent}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between",
      }}
    > 
        <div id="home">
          <Link to="/" >
            <img src={jamgoose} style={{width: '40px', height: '40px'}} alt="jamgoose" />
          </Link>
        </div>
        <button>
          JAMGOOSE
        </button>
        
    </header>
    
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
