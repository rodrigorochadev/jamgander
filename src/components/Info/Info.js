import React from 'react';
import { UppercaseDescription, Padding } from '../../styles/globalStyles'

const Info = (props) => {

    return(
        <Padding>
            <UppercaseDescription>{props.title}</UppercaseDescription>
            <p>{props.description}</p>
        </Padding>
    )
}

export default Info