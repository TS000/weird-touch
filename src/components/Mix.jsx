import React, { Component } from 'react';
import WavePlayer from 'waveplayer';

class Mix extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    const { id } = this.props.location.state
    const wavePlayer = new WavePlayer({
      container: `#${id}`,
      barWidth: 3,
      barGap: 1,
      height: 80,
      waveColor: '#000000',
      progressColor: '#bebebe',
      responsive: true
    });

    wavePlayer.load(`https://dmcyn88lu74jl.cloudfront.net/mixes/${id}.mp3`, `https://dmcyn88lu74jl.cloudfront.net/waves/${id}.json`)
      .then(() => wavePlayer.pause())
  }

  render() {
    const { img, imgAlt, trackList, id, title, } = this.props.location.state;
    return (
      <React.Fragment>
        <div id={id}></div>
        <h1>{title}</h1>
        <ul>
          <h2>Track List:</h2>
          {trackList.map((track, index) => (
            <li key={index}>{track.title} by {track.artist}</li>
          ))}
        </ul>
        <img src={img} alt={imgAlt} />
      </React.Fragment>
    )
  }
}

export default Mix;