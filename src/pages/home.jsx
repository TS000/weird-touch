import React, { useState, useEffect } from 'react';
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

function Home() {

  const [mixes, setMixes] = useState([{
    mixes: {}
  }]);

  useEffect(() => {
    fetch(url, data)
      .then(response => response.json())
      .then(json => {
        setMixes(json);
        console.log(json)
      })
  })
  console.log(mixes)
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

export default Home()

