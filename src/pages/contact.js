import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import contactImg from '../assets/svg/contact.svg'
import styled from "styled-components"
import { navigate } from "gatsby"
import {theme} from '../styles/theme'
import { Button, Container, Padding, Separator } from "../styles/globalStyles"

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  

const Contact = () => {

    const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }



    return(
        <Layout>
            <SEO title="Contact" />
            <Container>
            <Padding>  
            <ContactBanner>
                <h1>Contact Us</h1>
                <Separator />
            </ContactBanner>
            
            {/* <ContactImage>
                <img src={contactImg} alt="Contact" />
                <Separator />
            </ContactImage> */}
            
            <div>
                <Form >
                <form
                name="E-mails"
                method="post"
                action="/thank-you/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
            >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="E-mails" />
                <p hidden>
                <label htmlFor="bot-field">
                    Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                </label>
                </p>
                <label htmlFor="name">
                    Name <span className="req"> *</span>
                    <br />
                    <input id="name" type="text" name="name" onChange={handleChange} required/>
                </label>
                <label htmlFor="email">
                    Email <span className="req"> *</span>
                    <br />
                    <input id="email" type="email" name="email" onChange={handleChange} required/>
                </label>
                <label htmlFor="msg">
                    Message <span className="req"> *</span>
                    <br />
                    <textarea id="msg" name="message" onChange={handleChange} required/>
                </label>
                <Button>
                    <button  type="submit">Submit »</button>
                </Button>            
                
            </form>
            </Form>
            </div>
            </Padding>
            </Container>
        </Layout>
    )
}

export default Contact

export const ContactBanner = styled.div`
    padding-top: 10vh;
    text-align: center;
`

export const ContactImage = styled.div`
    
    display: none;
    

    @media ${theme.media.small} {


        img {
            height: 500px;
            width: auto;
        }

        display: flex;
        justify-content: center;
    }
`

export const Form = styled.div`

label {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    text-transform: uppercase;
}

.req {
    color: red;
}

input, textarea {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    height: 30px;
    width: 100%;
    
    border: 1px solid rgba(0,0,0,0.5);
    margin-bottom: 20px;

    &:focus {
        border: 1px solid ${theme.colors.accent};
    }
}

textarea {
    height: 150px;
}

.send-button {
    padding: 1em 2em;
    border: 1px solid ${theme.colors.accent};
    background-color: ${theme.colors.accent};
    transition: 0.3s ease-in;

    &:hover {
        cursor: pointer;
        background-color: black;
        color: white;
        border: 1px solid black;

    }

    a {
        color: white;
        text-decoration: none;
    }
}
`