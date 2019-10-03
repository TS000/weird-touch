import React from 'react'
import styled, { keyframes } from 'styled-components'
import Logo from '../img/snakeLogoOpenEye.svg'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const PageFour = styled.div`
width: 100%;
text-align: center;
padding-top: 25%;
@media (min-width: 800px){
  padding-top: 30px;
}
    > h1 {
        position: relative
        top: 30%
        font-size: 80px
        color: black
        
    } 
    > h2 {
        position: relative
        top: 30%
            font-size: 40px
    color: white;
    }
    img {
      animation: 5s ${fadeIn} ease-out;
      width: 100%;
      @media (min-width: 800px){
        width: 45%;
      }
    }
`
const Parking = () => {
  return (
    <PageFour>

      {/* <img src={Logo} alt="" /> */}
      <h1>Under construction</h1>
      <h1>👷‍♂️👷‍♂️👷‍♂️👷‍♀️</h1>

    </PageFour>
  )
}

export default Parking