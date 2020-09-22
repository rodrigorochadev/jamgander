import React from 'react'
import Img from 'gatsby-image'

import styled from 'styled-components'
import {theme} from '../../styles/theme'

const CardItem = (props) => {

    return(
        <Card>
            <CardId>{props.id}</CardId>
            <Img fixed={props.image} alt={props.title}></Img>
            <h2>{props.title}</h2>
            <Description>{props.description}</Description>
        </Card>
    )
}

export default CardItem

const Card = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin-bottom: 70px;

    &::last-child {
        margin-bottom: 0;
    }

    @media ${theme.media.small} {
        width: 35%;
    }
`

const CardId = styled.div`
    font-family: 'Merienda', cursive;
    position: absolute;
    top: -100px;
    right: 0%;
    font-weight: 700;
    font-size: 10rem;

    background: -webkit-linear-gradient(rgba(0,0,0,0.1) 0%, rgba(255, 255, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media ${theme.media.small} {
        top: -50px;
    }
`
const Description = styled.div`
    margin-top: 10px;
`