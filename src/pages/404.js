import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, SectionTitle, Padding, Separator } from "../styles/globalStyles"

import img404 from '../assets/svg/404.svg'
import styled from "styled-components"

import {theme} from '../styles/theme'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <Padding>
        <Banner404>
          <SectionTitle>
            <h1>Page not found</h1>
            <p>It appears this page does not exist. <Link to="/" >Go to the homepage</Link></p>
            
            <Separator />
            <Image404>
              <img src={img404} alt="404 Not Found" />
            </Image404>
          </SectionTitle>
        </Banner404>
        
      </Padding>
    </Container>
  </Layout>
)

export default NotFoundPage

const Banner404 = styled.div`
  padding-top: 100px;
`

const Image404 = styled.div`

  img {
    width: 250px;
    height: auto;

    @media ${theme.media.small} {
      height: 250px;
      width: auto;
    }
  }

  
  
`