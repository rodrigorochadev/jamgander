import { graphql, useStaticQuery } from "gatsby";
import React from "react"
import {SectionTitle} from "../../styles/globalStyles";

import ServiceItem from './serviceItem'

const Services = () => {
    
    const data = useStaticQuery(graphql`
        query ServicesQuery {
            allMarkdownRemark(
                sort: {fields: frontmatter___id}
                filter: {frontmatter: {type: {eq: "service"}}}) {
                edges {
                    node {
                        frontmatter {
                            description
                            id
                            title
                            image {
                                childImageSharp {
                                    fixed(width: 200) {
                                        ...GatsbyImageSharpFixed_tracedSVG
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    return(
        <>
            <SectionTitle>
                <h1>What can we do for you?</h1>
                <p>Check out our list of services. Need anything else? Contact us and we try to give you what you need.</p>
            </SectionTitle>
            
            {data.allMarkdownRemark.edges.map(
                service => {
                    return(
                        <ServiceItem 
                            key={service.node.frontmatter.id} 
                            id={service.node.frontmatter.id} 
                            title={service.node.frontmatter.title} 
                            description={service.node.frontmatter.description} 
                            image={service.node.frontmatter.image.childImageSharp.fixed} 
                        />
                    )
                }
            )}
        </>
    )

}

export default Services
