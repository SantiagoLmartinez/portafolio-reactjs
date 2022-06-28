import React, { useState } from 'react';
import styled from 'styled-components';
//import BurgerBtn from './BurgerBtn';

export const HeaderComp = () => {

    const [clicked, setClicked] = useState(false)

    //
    const [toggleClass, setToggleClass] = useState(false)

    const toggleBtn = () => {
        setToggleClass(!toggleClass)
        setClicked(!clicked)
        setInitialBg(!initialBg)

    }
    //
    //bgDiv
    const [initialBg, setInitialBg] = useState(false)
    //

    return (
        <>
            <HeaderStyled >
                <div className="header">
                    <div className="logo">
                        <span>Santiago L Martinez</span>
                    </div>
                    <div className={`nav-links ${clicked ? 'active' : ''} `}>
                        <a href="/">Home</a>
                        <a href="/">About me</a>
                        <a href="/">Portfolio</a>
                        <a href="/">Contact</a>
                    </div>
                    {/* <div className="burgerBtnClassname">
                    <BurgerBtn onclick={activar} />
                    </div> */}
                    <div className="burgerBtnClassname">
                        <BurgerStyled >
                            <div className='burgerBtn ' id="burgerBtn">
                                <button className={`${toggleClass ? 'open' : ''}`} onClick={toggleBtn}>
                                    <span className='top-lane'></span>
                                    <span className='middle-lane'></span>
                                    <span className='bot-lane'></span>
                                </button>
                            </div>
                        </BurgerStyled>
                    </div>
                    <BgDiv className={`${ initialBg ? 'activeBg' : ''}`}/>

                </div>
            </HeaderStyled>



        </>
    )
}

//header styles
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
    right: 0;

    margin-left: auto;
    margin-right: auto;
    text-align: center;
    @media (min-width: 768px) {
        position: initial;
        margin: 0;
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
    transition: all 1s  ease;
    
    a{
        color: yellow;
        display: block;
        font-size: 1.5em;
        padding: 0.5em;
        /* border: 1px solid #fff; */

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

//bg burger btn styles

const BgDiv = styled.div`
    position: absolute;
    left: -700px;
    top: -2000px;
    z-index: -1;
    transition: all 1s  ease;
    &.activeBg{
        background-color: #111;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        border-radius: 0 0 60% 0;
    }



`
// burgerBtn styles

const BurgerStyled = styled.div`

.burgerBtn{
width: 30px;
margin-right: 20px;

}
.burgerBtn button{
    border: none;
    width: 30px;
    background-color: #000
}

#burgerBtn button.open{
  .top-lane{
    animation-name: top-lane-animation;
  }
  .middle-lane{
    animation-name: middle-lane-animation;
  }
  .bot-lane{
    animation-name: bot-lane-animation;
  }
}
#burgerBtn button{
  .top-lane{
    animation-name: top-lane-animation-close;
  }
  .middle-lane{
    animation-name: middle-lane-animation-close;
  }
  .bot-lane{
    animation-name: bot-lane-animation-close;
  }
}

.burgerBtn button span{
  border-radius: 5px;
  background-color: white;
  display: block;
  width: 60%;
  margin: 5px auto;
  height: 2px;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes top-lane-animation {
  50%, 100%{
    margin: 0 auto;
    transform: translateY(2px) rotate(-45deg);
  }
}
@keyframes middle-lane-animation {
  50%, 100%{
    margin: 0 auto;
    transform: translateY(0px) rotate(45deg);
  }
}
@keyframes bot-lane-animation {
  20%, 100%{
    margin: 0 auto;
    width: 0;
    opacity: 0;
  }
  
}

@keyframes top-lane-animation-close {
  0%{
    margin: 0 auto;
    transform: translateY(2px) rotate(-45deg);
  }
  50%, 100%{
    margin: 5px auto;
    transform: translateY(0px) rotate(0deg);
  
  }
}
@keyframes middle-lane-animation-close {
  0%{
    margin: 0 auto;
    width: 0;
    opacity: 0;
  }
  20%, 100%{
    margin: 0 auto;
    width: 60%;
    opacity: 1;
  
  }
}
@keyframes bot-lane-animation-close {
  0%{
    margin: 0 auto;
    transform: translateY(-2px) rotate(45deg);
  }
  50%, 100%{
    margin: 5px auto;
    transform: translateY(0px) rotate(0deg);
  
  }
}
`