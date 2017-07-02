import React, { Component } from 'react';
import { images } from '../images.json';
import './Slider.css';

class Slider extends Component {
  constructor(props) {
    super();
    this.handleStartSlideshow = this.handleStartSlideshow.bind(this);
    this.handleStopSlideshow = this.handleStopSlideshow.bind(this);
  }
  handleStartSlideshow() {}
  handleStopSlideshow() {}
  render() {
    const slide = images.map((img, i) => <img key={i} src={img.url} alt={img.alternate} />);
    return (
      <div className="Slider">
        <div className="slides">
          {slide}
        </div>
        <div className="btns">
          <button onClick={this.handleStartSlideshow}>Start</button>
          <button onClick={this.handleStopSlideshow}>Stop</button>
        </div>
      </div>
    );
  }
}

export default Slider;
