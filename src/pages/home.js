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
    return ( 
      <React.Fragment>
        <h1>Weird Touch.</h1>
        <Card 
            innerTitle="price alerts"
            imgAlt="Tyler Snow at Weird Touch"
            white
            link="/thing"
        />
        <Card 
            innerTitle="price"
            imgAlt="Tyler Snow at Weird Touch"
            white
            link="/thing"
        />
        <Card 
            innerTitle="stuff"
            imgAlt="Tyler Snow at Weird Touch"
            white
            link="/thing"
        />
      </React.Fragment>
     );
  }
}
 
export default Home;