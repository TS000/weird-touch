import React, { Component } from 'react';
import styled from 'styled-components';
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

  componentDidMount() {
    const { mixes } = this.state;
    fetch(url, data)
      .then(response => response.json())
      .then(json => {
        this.setState({ mixes: json });
        console.log(mixes)
      })
  }

  render() {
    const { mixes } = this.state;
    return (
      <React.Fragment>
        <h1>Weird Touch.</h1>
        <CardWrap>
          {mixes.map(mix => (
            <Card
              innerTitle={mix.dj}
              mixTitle={mix.title}
              img={`https://dmcyn88lu74jl.cloudfront.net/images/${mix.id}.png`}
              imgAlt={mix.dj}
              white
              key={mix.id}
              id={mix.id}
              title={mix.title}
              trackList={mix.trackList}
            />
          ))}
        </CardWrap>
      </React.Fragment>
    );
  }
}