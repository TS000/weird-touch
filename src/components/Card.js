import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

// To handle options for my components I use simple logic in my CSS
const CallToAction = Styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    text-align: center;
    align-items: center;
    margin: 20px
    padding: 0 20px;
    flex-wrap: wrap;
    background-color: ${props => (props.white ? '#000000' : '#fff')}; 
    text-transform: uppercase
    border: 4px solid black
    overflow: hidden
    transition: ease all .2s;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    min-height: 200px;
    min-width: 200px;
    
    &:hover {
          background: rgba(0,0,0,.7);
        }
    h2 {
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 20px;
      font-size: 1rem;
      color: ${props => (props.white ? '#fff' : '#000000')};
      @media (min-width: 600px) {
        font-size: 3rem;
      }
    }
    img {
      width: 150%;
      @media (min-width: 600px) {
        width: 160%;
      }
    }
     @media (min-width: 600px) {
        width: ${props => (props.small ? '15em' : '20em')};
        height: ${props => (props.small ? '15em' : '20em')};
      }
`

export default ({ innerTitle, img, white, imgAlt, small, link, soundcloud }) => {
  return (
    
        <CallToAction white={white} small={small}>
          <img src={img} alt={imgAlt} />
          {soundcloud}
          <h2>{innerTitle}</h2>
        </CallToAction>
   
  )
}