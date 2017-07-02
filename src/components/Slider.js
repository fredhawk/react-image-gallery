import React, { Component } from 'react';
import { images } from '../images.json';
import './Slider.css';

class Slider extends Component {
  render() {
    return (
      <div className="Slider">
        {images.map((img, i) => <img key={i} src={img} alt="sunshine" />)}
      </div>
    );
  }
}

export default Slider;
