import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/Services/services"

import { Container, Padding } from "../styles/globalStyles"
import Banner from '../components/Banner/Banner'
import Info from "../components/Info/Info"
import Metodology from "../components/Metodology/Metodology"



const IndexPage = () => {

  return(
  <Layout>
    <SEO title="Welcome" />
    <Container>
      <Banner />
      <Info 
        title="Relationship with our clients" 
        description="We take our time to work directly with you. Understanding your business needs is very important for us to give you our best work."
      />

      <Padding>
        <Services />
      </Padding>

      <Info 
        title="Keeping users invested" 
        description="Slow websites make users stop browsing and that can lead to poor business decisions. Fast and minimalistic designed websites keep users invested and interested. Also it's more environmental friendly because it consumes less energy."
      />

      <Padding>
        <Metodology />
        
      </Padding>
        
      
      
      <Padding>
        <h1>Some of our projects</h1>
        <p>Take a look at our list of some selected projects. Get inspired and let’s build something together!</p>
        {/* Placeholder */}
        <div style={{marginTop: '30px'}}>
          <button>See all</button>
        </div>
      </Padding>
      
    </Container>
    
    
  </Layout>)
}

export default IndexPage