import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
// import { UppercaseDescription } from '../../styles/globalStyles'
import {theme} from '../../styles/theme'
// import Info from '../Info/Info'
import bannerImg from '../../assets/svg/banner.svg'
import { Button, UppercaseDescription } from '../../styles/globalStyles'

const Banner = () => {


    return(
        <>
            <FullBanner >
            <BannerContainer>
                <BannerText>
                    {/* <UppercaseDescription>join us @ JAMGOOSE</UppercaseDescription> */}
                    <h1>Allow us to give you, your dream website.</h1>
                    <p>Make your business grow with a better online presence. We provide you with the best options for your needs.</p>
                </BannerText>
                <div>
                    <Link to="/">
                        <Button>
                            <button>Learn More</button>
                        </Button>
                    </Link>
                </div>
            </BannerContainer>

            {/* <Info fullWidth
                title="Relationship with our clients" 
                description="We take our time to work directly with you. Understanding your business needs is very important for us to give you our best work."
            />
             */}
            <div>
                <UppercaseDescription>Relationship with our clients</UppercaseDescription>
                <p>We take our time to work directly with you. Understanding your business needs is very important for us to give you our best work.</p>
            </div>
            

            </FullBanner>
            <BannerImage >
                <img src={bannerImg} alt="Banner" />
            </BannerImage> 
        </>
    )
}

export default Banner

export const BannerContainer = styled.div`
    min-height: 100vh;
    padding-top: 35vh;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
`

export const BannerText = styled.div`
    margin-bottom: 30px;
`

export const FullBanner = styled.div`
    width: 100%;

    @media ${theme.media.small} {
        width: 50%;
    }

`

export const BannerImage = styled.div`
    display: none;

    @media ${theme.media.small} {
        margin-top: 20vh;
        position: absolute;
        top: 0;
        right: 0;
        height: 105vh;
        
        display: initial;
        width: 40%;
        z-index: 0;
        
        img {
            max-height: 100%;
            width: auto;
        }
    }

`
