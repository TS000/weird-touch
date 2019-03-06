import React, { Component } from 'react';
import styled from 'styled-components';
// import anime from 'animejs';

import Card from '../components/Card';

// anime({
//   targets: 'div',
//   translateX: 250,
//   rotate: '1turn',
//   backgroundColor: '#FFF',
//   duration: 800
// });

import mix1 from '../img/mix1.png';
import mix2 from '../img/mix2.png';
import mix3 from '../img/mix3.png';
import mix4 from '../img/mix4.png';

const CardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; 
`

class Home extends Component {
  state = { diz: 1 }
  render() { 

    const mixes = [ 
      {name: 'Cool Mix1', image: mix1, soundcloud: <iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/202438346&color=%237c7c7c&inverse=false&auto_play=false&show_user=true"></iframe>}, 
      {name: 'Cool Mix2', image: mix2, soundcloud: <iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/202438346&color=%237c7c7c&inverse=false&auto_play=false&show_user=true"></iframe>}, 
      {name: 'Cool Mix3', image: mix3, soundcloud: <iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/202438346&color=%237c7c7c&inverse=false&auto_play=false&show_user=true"></iframe>}
    ];

    return ( 
      <React.Fragment>
        {/* <h1>Weird Touch.</h1> */}
        <CardWrap>
        {mixes.map(mix => (
        <Card 
            innerTitle = { mix.name }
            img = { mix.image }
            imgAlt="a thing"
            white
            soundcloud= { mix.soundcloud }
        />
        )
        )}
        </CardWrap>
      </React.Fragment>
     );
  }
}
 
export default Home;