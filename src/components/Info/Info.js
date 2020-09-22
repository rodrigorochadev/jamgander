import React from 'react';
import styled, {css} from 'styled-components';
import { UppercaseDescription, Padding } from '../../styles/globalStyles'
import {theme} from '../../styles/theme'

const Info = (props) => {

    return(
        <Padding>
            <InfoContainer>
                <UppercaseDescription>{props.title}</UppercaseDescription>
                <p>{props.description}</p>
            </InfoContainer>
            
        </Padding>
    )
}

export default Info

export const InfoContainer = styled.div`
    width: 100%;

    @media ${theme.media.medium} {
        width: 50%;
    }

    ${props =>
        props.left &&
        css`
        display: flex;
        justify-content: right;
    `};


`