/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

import { Container, GlobalStyle } from "../styles/globalStyles"
import Footer from "./footer"


const Layout = ({ children }) => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Header />
        </Container>
        
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
