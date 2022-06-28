import React,{useState} from 'react'
import styled from 'styled-components'

function BurgerBtn() {

  const [toggleClass,setToggleClass] = useState(false)

  const toggleBtn = () => {
    setToggleClass(!toggleClass)
  }

  return (
    <BurgerStyled >
      <div className='burgerBtn' id="burgerBtn">
        <button className={`${toggleClass ? 'open' : ''}`} onClick={toggleBtn}>
          <span className='top-lane'></span>
          <span className='middle-lane'></span>
          <span className='bot-lane'></span>
        </button>
      </div>
    </BurgerStyled>

  )
}

export default BurgerBtn

const BurgerStyled = styled.div`

.burgerBtn{
width: 30px;
margin-right: 20px;

}
.burgerBtn button{
  background-color: black;
  border: none;
  width: 30px;
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