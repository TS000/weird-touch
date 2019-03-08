import React, { Component } from 'react';
import styled from 'styled-components';
// import anime from 'animejs';
import Card from '../components/Card';

const CardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; 
`
const mixes = [ 
  {id: 'mix1', name: 'Cool Mix1', image: 'https://dmcyn88lu74jl.cloudfront.net/images/mix4.png'}
];

const url = 'https://dmcyn88lu74jl.cloudfront.net/json/list.json';

const data = {
  method: 'GET',
  headers: new Headers({
    'Content-Type': 'application/json'
  }),
};

fetch(url,data)
.then(response => response.json())
      .then(json => {
        console.log(json)
      })


export default class Home extends Component {
  state = { showPlayer: false }

  render() { 
    const { showPlayer } = this.state;
    return ( 
      <React.Fragment>
        <h1>Weird Touch.</h1>
        <CardWrap>
        {mixes.map(mix => (
        <Card 
            innerTitle = { mix.name }
            img={ mix.image }
            imgAlt="a thing"
            white
            key={ mix.name }
            showPlayer={ showPlayer }
            id={ mix.id }
        />
        ))}
        </CardWrap>
      </React.Fragment>
     );
  }
}
