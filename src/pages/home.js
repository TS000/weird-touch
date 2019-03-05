import React, { Component } from 'react';
// import anime from 'animejs';

import Card from '../components/Card';

// anime({
//   targets: 'div',
//   translateX: 250,
//   rotate: '1turn',
//   backgroundColor: '#FFF',
//   duration: 800
// });

class Home extends Component {
  state = { diz: 1 }
  render() { 

    const mixes = [ {name: 'Cool Mix1'}, {name: 'Cool Mix2'}, {name: 'Cool Mix3'}];

    return ( 
      <React.Fragment>
        <h1>Weird Touch.</h1>
        {mixes.map(mix => (
        <Card 
            innerTitle = {mix.name}
            imgAlt="a thing"
            white
            link="/thing"
        />
        )
        )}
        
      </React.Fragment>
     );
  }
}
 
export default Home;