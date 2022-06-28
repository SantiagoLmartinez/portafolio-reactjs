import React from 'react';
import styled from 'styled-components';

export const FooterComp = () => {
    return (
        <>
            <FooterStyled>
                <footer className="footer-container">
                    <h1>Footer <span>Responsive</span></h1>
                </footer>
            </FooterStyled>
        </>
    )
}

const FooterStyled = styled.footer`
    .footer-container{
        padding: 0.5em;
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: #111;
        text-align: center;
    }
    h1{
        color: green;
    }
        span{
            color: green;
        
        }
    


    @media  screen and (max-width: 768px) {
        h1{
            color: red;
        }
        span{
            color: red;
        }
    } 

    @media screen and (max-width: 600px) {

    h1{
        color: pink;
    }
    span{
        color: pink;
    }

} 

`