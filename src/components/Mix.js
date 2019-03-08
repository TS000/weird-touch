import React, { Component } from 'react';
import styled from 'styled-components';
import WavePlayer from 'waveplayer';



class Mix extends Component {
  constructor(props) {
    super(props);
    this.state = {     }
  }

  componentDidMount(){
      const wavePlayer = new WavePlayer({
        container: `#${this.props.match.params.id}`,
        barWidth: 3,
        barGap: 1,
        height: 80,
        waveColor: '#000000',
        progressColor: '#bebebe',
        responsive: true
    });
    
    wavePlayer.load(`https://dmcyn88lu74jl.cloudfront.net/mixes/${this.props.match.params.id}.mp3`, `https://dmcyn88lu74jl.cloudfront.net/waves/${this.props.match.params.id}.json`)
    .then(() => wavePlayer.play())
    console.log(this.props.match.params.id)
  }

  render() {
    const image = `https://dmcyn88lu74jl.cloudfront.net/images/${this.props.match.params.id}.png` 
    return (
      <React.Fragment>
      <div id={ this.props.match.params.id }></div>
    <h2>ID: { this.props.match.params.id } </h2>
    <img src={ image } alt={ this.props.match.params.id } />
    </React.Fragment>
    )
  }
}
 
export default Mix;