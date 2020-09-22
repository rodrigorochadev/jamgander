import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/Services/services"

import { Container, Padding } from "../styles/globalStyles"
import Banner from '../components/Banner/Banner'
import Info from "../components/Info/Info"
import Metodology from "../components/Metodology/Metodology"
// import Portfolio from "../components/Portfolio/Porfolio"



const IndexPage = (props) => {

  return(
  <Layout>
    <SEO title="Welcome" />
    <Container>
      <Banner />
      

      <Padding>
        <Services />
      </Padding>
      
        <Info right
          title="Keeping users invested" 
          description="Slow websites make users stop browsing and that can lead to poor business decisions. Fast and minimalistic designed websites keep users invested and interested. Also it's more environmental friendly because it consumes less energy."
        />
      

      <Padding>
        <Metodology />
        
      </Padding>
        
      
      
      {/* <Padding>
        <Portfolio />
      </Padding> */}
      
    </Container>
    
    
  </Layout>)
}

export default IndexPage