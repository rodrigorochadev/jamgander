import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'


const Banner = () => {


    return(
        <div>
            <div style={{width: '100%'}}>
            <BannerContainer>
                <BannerText>
                    <UppercaseDescription>join us @ JAMGANDER</UppercaseDescription>
                    <h1>Allow us to give you, your dream website.</h1>
                    <p>Make your business grow with a better online presence. We provide you with the best options for your needs.</p>
                </BannerText>
                <div>
                    <Link to="/"><button>Contact Us</button></Link>
                </div>
            </BannerContainer>
            <BannerContinuation>
                <UppercaseDescription>Relationship with our clients</UppercaseDescription>
                <p>We take our time to work directly with you. Understanding your business needs is very important for us to give you our best work.</p>
            </BannerContinuation>
            </div>
            <div style={{visibility: 'hidden', position: 'absolute', top: 0, right: 0, height: '100vh', display: 'grid', alignItems: "center", width: '40%'}}>
                image_here
            </div>
        </div>
    )
}

export default Banner

export const BannerContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const BannerText = styled.div`
    margin-bottom: 30px;
`

export const BannerContinuation = styled.div`
    
`

export const UppercaseDescription = styled.div`
    text-transform: uppercase;
    font-weight: bold;
`