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

const url = 'https://dmcyn88lu74jl.cloudfront.net/json/list.json';

const data = {
  method: 'GET',
  headers: new Headers({
    'Content-Type': 'application/json'
  }),
};



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { mixes: [] }
  }

  componentDidMount(){
    const { mixes } = this.state;
    fetch(url,data)
      .then(response => response.json())
      .then(json => {
        this.setState({ mixes: json });
        console.log(mixes)
      })
    }

  render() { 
    const { mixes } = this.state;
    console.log(mixes)
    return ( 
      <React.Fragment>
        <h1>Weird Touch.</h1>
        <CardWrap>
        {mixes.map(mix => (
        <Card 
            innerTitle = { mix.dj }
            img={ mix.image }
            imgAlt="a thing"
            white
            key={ mix.dj }
            id={ mix.id }
        />
        ))}
        </CardWrap>
      </React.Fragment>
     );
  }
}

