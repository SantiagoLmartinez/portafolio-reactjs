import React, {useState} from 'react';
import styled from 'styled-components';
import BurgerBtn from './BurgerBtn';

export const HeaderComp = () => {
    
    const [clicked, setClicked] = useState(false)
    
    const handleClick = () =>{
        setClicked(!clicked)
    }

    return (
        <>
        <HeaderStyled >
                <div className="header">
                    <div className="logo">
                        <span>Santiago L Martinez</span>
                    </div>
                    <div className='nav-links active' id='nav-links'>
                        <a href="/">Home</a>
                        <a href="/">About me</a>
                        <a href="/">Portfolio</a>
                        <a href="/">Contact</a>
                    </div>
                    <div className="burgerBtnClassname">
                    <BurgerBtn />

                    </div>
                </div>
            </HeaderStyled>


        
        </>
    )
}

const HeaderStyled = styled.header`
.header{
    height: 80px;
    width: 100%;
    color: #000;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;

}

.header .logo{
    color: red;
    font-size: 1.5em;
    padding: 15px;
}
.nav-links{
    position: absolute;
    top: -2000px;
    left: -700px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    @media (max-width: 768px) {
    }
}
.nav-links.active{
    width: 100%;
    display: block;
    position: absolute;
    top: 20%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    
    a{
        color: yellow;
        display: block;
        font-size: 1.5em;
        padding: 0.5em;
        border: 1px solid #fff;

    }
}
.nav-links a{
    text-decoration: none;
    padding: 1em;
}

.burgerBtnClassname{
    @media (min-width: 768px) {
        display: none;
    }
}

`