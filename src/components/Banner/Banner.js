import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { UppercaseDescription } from '../../styles/globalStyles'

const Banner = () => {


    return(
        <div>
            <div style={{width: '100%'}}>
            <BannerContainer>
                <BannerText>
                    <UppercaseDescription>join us @ JAMGOOSE</UppercaseDescription>
                    <h1>Allow us to give you, your dream website.</h1>
                    <p>Make your business grow with a better online presence. We provide you with the best options for your needs.</p>
                </BannerText>
                <div>
                    <Link to="/"><button>Contact Us</button></Link>
                </div>
            </BannerContainer>
            </div>
            <div style={{position: 'absolute', top: 0, right: 0, height: '100vh', display: 'none', alignItems: "center", width: '40%'}}>
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
