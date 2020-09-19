import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/Services/services"
import { Container, Padding } from "../styles/globalStyles"
import Banner from '../components/Banner/Banner'
const IndexPage = () => {

  return(
  <Layout>
    <SEO title="Welcome" />
    <Container>
      <Banner />
      <Padding>
        <Services />
      </Padding>

      <Padding>
        <h1>How we work</h1>
        
      </Padding>

      <Padding>
        <h1>Some of our projects</h1>
        <p>Take a look at our list of some selected projects. Get inspired and let’s build something together!</p>
        <button>See all</button>
      </Padding>
      
    </Container>
    
    
  </Layout>)
}

export default IndexPage